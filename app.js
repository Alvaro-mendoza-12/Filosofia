/**
 * ============================================================================
 * MOTOR PRINCIPAL DE LA PLATAFORMA DE ESTUDIO INTERACTIVA - FILOSOFÍA UNIDAD 2
 * ============================================================================
 */

(function () {
  'use strict';

  // --- ESTADO GLOBAL DE LA APLICACIÓN ---
  const state = {
    currentView: 'roadmap',
    theme: localStorage.getItem('filo_theme') || 'dark',
    soundEnabled: localStorage.getItem('filo_sound') !== 'false',

    // Exámenes
    currentExamId: 1,
    examQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: {}, // { qId: optionIndex }
    examTimer: 0,
    examInterval: null,
    examInstantFeedback: false,
    examCompleted: false,
    lastExamResults: null,
    allExamScores: JSON.parse(localStorage.getItem('filo_scores') || '{}'),

    // Cuaderno global de errores acumulados
    globalMistakes: JSON.parse(localStorage.getItem('filo_mistakes') || '[]'),

    // Flashcards
    flashcards: [],
    fcFiltered: [],
    fcIndex: 0,
    fcFlipped: false,
    fcMastered: JSON.parse(localStorage.getItem('filo_fc_mastered') || '[]'),

    // Minijuego Emparejar
    matchLevelIndex: 0,
    matchSelectedLeft: null,
    matchSelectedRight: null,
    matchedPairsCount: 0,
    matchErrorsCount: 0,
    matchStartTime: null,
    matchInterval: null,

    // Teoría
    activeModuleId: 'mod-1',

    // Glosario
    activeGlosarioFilter: 'Todos',
    searchQuery: ''
  };

  // --- SÍNTESIS DE AUDIO (Web Audio API: Cero dependencias externas) ---
  const SoundEngine = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },
    playTone(freq, type, duration, delay = 0, gainLevel = 0.1) {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      }, delay);
    },
    click() {
      this.playTone(600, 'sine', 0.05, 0, 0.05);
    },
    correct() {
      this.playTone(523.25, 'sine', 0.12, 0, 0.1); // C5
      this.playTone(659.25, 'sine', 0.18, 90, 0.1); // E5
      this.playTone(783.99, 'sine', 0.25, 180, 0.12); // G5
    },
    wrong() {
      this.playTone(260, 'sawtooth', 0.15, 0, 0.08);
      this.playTone(196, 'sawtooth', 0.25, 100, 0.08);
    },
    fanfare() {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        this.playTone(freq, 'triangle', 0.35, i * 110, 0.12);
      });
    }
  };

  // --- INICIALIZACIÓN PRINCIPAL ---
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    setupEventListeners();
    initRoadmap();
    initTeoria();
    initGlosario();
    initFlashcards();
    initEmparejar();
    initMnemotecnias();
    initExamenesHub();
    renderGlobalMistakes();
    updateQuickStats();

    // Navegar a la vista inicial
    switchView('roadmap');
  });

  // --- TEMA Y CONFIGURACIÓN ---
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = state.theme === 'dark' ? '☀️' : '🌙';
      themeBtn.title = state.theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('filo_theme', state.theme);
    applyTheme();
    SoundEngine.click();
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('filo_sound', state.soundEnabled);
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.innerHTML = state.soundEnabled ? '🔔' : '🔕';
      soundBtn.title = state.soundEnabled ? 'Silenciar Sonidos' : 'Activar Sonidos';
    }
    if (state.soundEnabled) SoundEngine.click();
  }

  // --- GESTIÓN DE EVENTOS DE NAVEGACIÓN ---
  function setupEventListeners() {
    // Botones de cabecera
    document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
    document.getElementById('sound-toggle-btn')?.addEventListener('click', toggleSound);

    // Nav pills
    document.querySelectorAll('.nav-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-view');
        if (view) {
          switchView(view);
          SoundEngine.click();
        }
      });
    });

    // Buscador universal rápido
    const universalSearch = document.getElementById('universal-search-input');
    if (universalSearch) {
      universalSearch.addEventListener('input', (e) => {
        handleUniversalSearch(e.target.value.trim().toLowerCase());
      });
    }

    // Modal close
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') closeModal();
    });

    // Teclado para Flashcards y accesos directos
    document.addEventListener('keydown', (e) => {
      if (state.currentView === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.code === 'ArrowRight') {
          nextFlashcard();
        } else if (e.code === 'ArrowLeft') {
          prevFlashcard();
        }
      }
    });
  }

  function switchView(viewName) {
    state.currentView = viewName;

    // Actualizar nav pills
    document.querySelectorAll('.nav-pill').forEach(pill => {
      if (pill.getAttribute('data-view') === viewName) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Ocultar todas las vistas y mostrar la elegida
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Acciones específicas al entrar a una vista
    if (viewName === 'errores') {
      renderGlobalMistakes();
    } else if (viewName === 'emparejar') {
      if (!state.matchStartTime) startMatchLevel(state.matchLevelIndex);
    }
  }

  // --- STATS RÁPIDOS EN BARRA SUPERIOR ---
  function updateQuickStats() {
    const totalMistakesEl = document.getElementById('stat-mistakes-count');
    if (totalMistakesEl) {
      totalMistakesEl.textContent = state.globalMistakes.length;
    }

    const badgeMistakesNav = document.getElementById('nav-mistakes-badge');
    if (badgeMistakesNav) {
      badgeMistakesNav.textContent = state.globalMistakes.length;
      badgeMistakesNav.style.display = state.globalMistakes.length > 0 ? 'inline-block' : 'none';
    }

    const totalMasteredFcEl = document.getElementById('stat-mastered-count');
    if (totalMasteredFcEl) {
      totalMasteredFcEl.textContent = `${state.fcMastered.length}/60`;
    }

    const totalExamsDoneEl = document.getElementById('stat-exams-count');
    if (totalExamsDoneEl) {
      const count = Object.keys(state.allExamScores).length;
      totalExamsDoneEl.textContent = `${count}/20`;
    }
  }

  // ==========================================================================
  // 1. RECORRIDO GUIADO (ROADMAP)
  // ==========================================================================
  function initRoadmap() {
    const container = document.getElementById('roadmap-steps-container');
    if (!container) return;

    const steps = [
      {
        num: "01",
        badge: "Fundamentos",
        badgeClass: "badge-blue",
        title: "El Ente, el Ser (Esse) y la Metafísica",
        desc: "Domina qué es la ciencia del ente en cuanto ente, la analogía del ser, y cómo el acto de ser (esse) da vida a la esencia. Lee los capítulos 1 al 6.",
        teoriaMod: "mod-1",
        examTarget: 1,
        flashcardFilter: "Separata 1"
      },
      {
        num: "02",
        badge: "Estructura Ontológica",
        badgeClass: "badge-gold",
        title: "Substancia, Accidente e Hilemorfismo",
        desc: "Aprende la distinción entre lo que existe en sí (substancia) y en otro (accidente), la materia prima y forma substancial, y los primeros principios del ser.",
        teoriaMod: "mod-2",
        examTarget: 6,
        flashcardFilter: "Separata 2"
      },
      {
        num: "03",
        badge: "Dinámica y Trascendencia",
        badgeClass: "badge-green",
        title: "Las Cuatro Causas y los Trascendentales",
        desc: "Comprende la Causa Material, Formal, Eficiente y Final (la causa causarum), junto con las propiedades del ser: Uno, Verdadero, Bueno y Bello.",
        teoriaMod: "mod-3",
        examTarget: 11,
        flashcardFilter: "Separata 3"
      },
      {
        num: "04",
        badge: "Cumbre Metafísica",
        badgeClass: "badge-red",
        title: "Teodicea: Demostración de Dios y Realismo",
        desc: "Supera el inmanentismo kantiano y el agnosticismo. Estudia la 1ª vía del movimiento, el 'Ipsum Esse Subsistens' y la imposibilidad del regreso al infinito.",
        teoriaMod: "mod-4",
        examTarget: 16,
        flashcardFilter: "Separata 4"
      }
    ];

    container.innerHTML = steps.map(step => `
      <div class="step-card">
        <span class="step-number">${step.num}</span>
        <span class="step-badge ${step.badgeClass}">${step.badge}</span>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-summary">${step.desc}</p>
        <div class="step-actions">
          <button class="btn-primary" onclick="window.FiloApp.goToTeoria('${step.teoriaMod}')">
            📖 Ver Teoría
          </button>
          <button class="btn-secondary" onclick="window.FiloApp.startExam(${step.examTarget})">
            📝 Examen ${step.examTarget}
          </button>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 2. TEORÍA COMPLETA ESTRUCTURADA
  // ==========================================================================
  function initTeoria() {
    const navContainer = document.getElementById('teoria-modules-nav');
    if (!navContainer || !window.MODULOS_TEORIA) return;

    navContainer.innerHTML = window.MODULOS_TEORIA.map((mod, idx) => `
      <button class="module-pill-btn ${idx === 0 ? 'active' : ''}" data-modid="${mod.id}" onclick="window.FiloApp.selectTeoriaModule('${mod.id}')">
        <span class="mod-tag">Módulo ${mod.numero}</span>
        <span>${mod.titulo.split(':')[1] || mod.titulo}</span>
      </button>
    `).join('');

    renderTeoriaModule(state.activeModuleId);
  }

  function selectTeoriaModule(modId) {
    state.activeModuleId = modId;
    document.querySelectorAll('.module-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-modid') === modId);
    });
    renderTeoriaModule(modId);
    SoundEngine.click();
  }

  function renderTeoriaModule(modId) {
    const container = document.getElementById('teoria-chapters-container');
    if (!container || !window.MODULOS_TEORIA) return;

    const modulo = window.MODULOS_TEORIA.find(m => m.id === modId) || window.MODULOS_TEORIA[0];

    let html = `
      <div style="margin-bottom: 1.5rem; padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.3rem;">${modulo.titulo}</h2>
        <span style="display: inline-block; font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Fuente: ${modulo.separata}</span>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${modulo.descripcion}</p>
      </div>
      <div class="chapters-accordion">
    `;

    modulo.capitulos.forEach((cap, idx) => {
      html += `
        <div class="chapter-card ${idx === 0 ? 'open' : ''}" id="card-${cap.id}">
          <div class="chapter-header" onclick="window.FiloApp.toggleChapter('${cap.id}')">
            <div class="chapter-title-group">
              <h3>${cap.titulo}</h3>
              <p>${cap.subtitulo}</p>
            </div>
            <div class="chapter-toggle-icon">▼</div>
          </div>
          <div class="chapter-body">
            <!-- Analogía cotidiana -->
            <div class="didactic-box box-analogy">
              <div class="box-analogy-title">💡 Analogía Cotidiana ("En Cristiano"):</div>
              <p style="font-size: 0.92rem; color: var(--text-primary);">${cap.analogia}</p>
            </div>

            <!-- Puntos Clave para Examen -->
            <div class="didactic-box box-keypoints">
              <div class="box-keypoints-title">🎯 Puntos Clave de Dominio Rápido:</div>
              <ul class="keypoints-list">
                ${cap.puntosClave.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Texto Completo Original Sin Resúmenes -->
            <div style="margin-top: 1rem;">
              <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-accent); text-transform: uppercase; margin-bottom: 0.5rem;">
                📜 Texto Original Completo de la Separata:
              </h4>
              <div class="chapter-full-text">${cap.contenido}</div>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  function toggleChapter(capId) {
    const card = document.getElementById(`card-${capId}`);
    if (card) {
      card.classList.toggle('open');
      SoundEngine.click();
    }
  }

  // ==========================================================================
  // 3. GLOSARIO FILOSÓFICO INTERACTIVO
  // ==========================================================================
  function initGlosario() {
    const filtersContainer = document.getElementById('glosario-filter-buttons');
    if (!filtersContainer || !window.GLOSARIO_TERMINOS) return;

    const categories = ['Todos', 'Metafísica Fundamental', 'Estructura del Ente', 'Causas y Principios', 'Teodicea y Conocimiento'];

    filtersContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === state.activeGlosarioFilter ? 'active' : ''}" onclick="window.FiloApp.filterGlosario('${cat}')">
        ${cat}
      </button>
    `).join('');

    renderGlosarioCards();
  }

  function filterGlosario(cat) {
    state.activeGlosarioFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === cat);
    });
    renderGlosarioCards();
    SoundEngine.click();
  }

  function renderGlosarioCards() {
    const grid = document.getElementById('glosario-cards-grid');
    if (!grid || !window.GLOSARIO_TERMINOS) return;

    let terms = window.GLOSARIO_TERMINOS;

    // Filtro por categoría
    if (state.activeGlosarioFilter !== 'Todos') {
      terms = terms.filter(t => t.categoria === state.activeGlosarioFilter);
    }

    // Filtro por búsqueda
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      terms = terms.filter(t =>
        t.termino.toLowerCase().includes(q) ||
        t.definicionTecnica.toLowerCase().includes(q) ||
        t.enCristiano.toLowerCase().includes(q) ||
        t.ejemploCotidiano.toLowerCase().includes(q)
      );
    }

    if (terms.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No se encontraron términos para esta búsqueda.</div>`;
      return;
    }

    grid.innerHTML = terms.map(t => `
      <div class="glosario-card">
        <div class="glosario-card-header">
          <div>
            <h3 class="glosario-term">${t.termino}</h3>
            <span class="glosario-etim">${t.etimologia || ''}</span>
          </div>
          <span class="glosario-tag badge-gold">${t.separata}</span>
        </div>

        <div class="glosario-section-block block-tecnico">
          <div class="block-label">📐 Definición Rigurosa</div>
          <div>${t.definicionTecnica}</div>
        </div>

        <div class="glosario-section-block block-cristiano">
          <div class="block-label">🗣️ En Cristiano</div>
          <div>${t.enCristiano}</div>
        </div>

        <div class="glosario-section-block block-ejemplo">
          <div class="block-label">🍎 Ejemplo Cotidiano</div>
          <div>${t.ejemploCotidiano}</div>
        </div>

        <div class="glosario-section-block block-examen">
          <div class="block-label">⚠️ Clave para Examen</div>
          <div>${t.consejoExamen}</div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 4. FLASHCARDS 3D
  // ==========================================================================
  function initFlashcards() {
    if (!window.BANCO_FLASHCARDS) return;
    state.flashcards = [...window.BANCO_FLASHCARDS];
    state.fcFiltered = [...state.flashcards];
    state.fcIndex = 0;
    state.fcFlipped = false;
    renderFlashcard();
  }

  function filterFlashcards(separata) {
    if (separata === 'Todas') {
      state.fcFiltered = [...state.flashcards];
    } else {
      state.fcFiltered = state.flashcards.filter(fc => fc.separata === separata);
    }
    state.fcIndex = 0;
    state.fcFlipped = false;
    renderFlashcard();
    SoundEngine.click();
  }

  function shuffleFlashcards() {
    for (let i = state.fcFiltered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.fcFiltered[i], state.fcFiltered[j]] = [state.fcFiltered[j], state.fcFiltered[i]];
    }
    state.fcIndex = 0;
    state.fcFlipped = false;
    renderFlashcard();
    SoundEngine.click();
  }

  function flipFlashcard() {
    state.fcFlipped = !state.fcFlipped;
    const cardInner = document.getElementById('flashcard-inner');
    if (cardInner) {
      cardInner.classList.toggle('is-flipped', state.fcFlipped);
      SoundEngine.click();
    }
  }

  function nextFlashcard() {
    if (state.fcIndex < state.fcFiltered.length - 1) {
      state.fcIndex++;
      state.fcFlipped = false;
      renderFlashcard();
      SoundEngine.click();
    }
  }

  function prevFlashcard() {
    if (state.fcIndex > 0) {
      state.fcIndex--;
      state.fcFlipped = false;
      renderFlashcard();
      SoundEngine.click();
    }
  }

  function markFlashcard(isMastered) {
    const currentFc = state.fcFiltered[state.fcIndex];
    if (!currentFc) return;

    if (isMastered) {
      if (!state.fcMastered.includes(currentFc.id)) {
        state.fcMastered.push(currentFc.id);
        localStorage.setItem('filo_fc_mastered', JSON.stringify(state.fcMastered));
        SoundEngine.correct();
      }
    } else {
      state.fcMastered = state.fcMastered.filter(id => id !== currentFc.id);
      localStorage.setItem('filo_fc_mastered', JSON.stringify(state.fcMastered));
      SoundEngine.wrong();
    }

    updateQuickStats();

    // Pasar a la siguiente tarjeta automáticamente
    if (state.fcIndex < state.fcFiltered.length - 1) {
      nextFlashcard();
    } else {
      renderFlashcard();
    }
  }

  function renderFlashcard() {
    const cardInner = document.getElementById('flashcard-inner');
    const metaCount = document.getElementById('fc-counter-label');
    const progressBar = document.getElementById('fc-progress-fill');
    const frontText = document.getElementById('fc-front-text');
    const backText = document.getElementById('fc-back-text');
    const badgeSep = document.getElementById('fc-badge-separata');
    const badgeCat = document.getElementById('fc-badge-categoria');
    const hintMnemo = document.getElementById('fc-back-hint');
    const statusIcon = document.getElementById('fc-status-icon');

    if (!state.fcFiltered.length) return;
    const card = state.fcFiltered[state.fcIndex];

    if (cardInner) cardInner.classList.toggle('is-flipped', state.fcFlipped);
    if (metaCount) metaCount.textContent = `Tarjeta ${state.fcIndex + 1} de ${state.fcFiltered.length}`;
    if (progressBar) progressBar.style.width = `${((state.fcIndex + 1) / state.fcFiltered.length) * 100}%`;

    if (frontText) frontText.textContent = card.frente;
    if (backText) backText.textContent = card.dorso;
    if (badgeSep) badgeSep.textContent = card.separata;
    if (badgeCat) badgeCat.textContent = card.categoria;
    if (hintMnemo) hintMnemo.textContent = card.mnemotecnia ? `🧠 Mnemotecnia: ${card.mnemotecnia}` : '';

    const isMastered = state.fcMastered.includes(card.id);
    if (statusIcon) {
      statusIcon.innerHTML = isMastered ? '⭐ Dominada' : '⏳ En Estudio';
      statusIcon.style.color = isMastered ? 'var(--accent-gold)' : 'var(--text-muted)';
    }
  }

  // ==========================================================================
  // 5. JUEGO DE EMPAREJAR (MATCHING GAME)
  // ==========================================================================
  function initEmparejar() {
    const navLevels = document.getElementById('match-levels-nav');
    if (!navLevels || !window.EMPAREJAR_DATA) return;

    navLevels.innerHTML = window.EMPAREJAR_DATA.niveles.map((lvl, idx) => `
      <button class="filter-btn ${idx === state.matchLevelIndex ? 'active' : ''}" onclick="window.FiloApp.startMatchLevel(${idx})">
        ${lvl.nombre.split(':')[0]}
      </button>
    `).join('');
  }

  function startMatchLevel(levelIdx) {
    state.matchLevelIndex = levelIdx;
    state.matchSelectedLeft = null;
    state.matchSelectedRight = null;
    state.matchedPairsCount = 0;
    state.matchErrorsCount = 0;

    document.querySelectorAll('#match-levels-nav .filter-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === levelIdx);
    });

    const level = window.EMPAREJAR_DATA.niveles[levelIdx];
    document.getElementById('match-level-title').textContent = level.nombre;
    document.getElementById('match-level-desc').textContent = level.descripcion;

    // Mezclar listas izquierda y derecha
    const leftItems = [...level.parejas].sort(() => Math.random() - 0.5);
    const rightItems = [...level.parejas].sort(() => Math.random() - 0.5);

    const leftCol = document.getElementById('match-col-left');
    const rightCol = document.getElementById('match-col-right');

    leftCol.innerHTML = leftItems.map(item => `
      <div class="match-item" id="match-l-${item.id}" data-id="${item.id}" onclick="window.FiloApp.selectMatchItem('left', '${item.id}')">
        <strong>${item.concepto}</strong>
      </div>
    `).join('');

    rightCol.innerHTML = rightItems.map(item => `
      <div class="match-item" id="match-r-${item.id}" data-id="${item.id}" onclick="window.FiloApp.selectMatchItem('right', '${item.id}')">
        <span>${item.definicion}</span>
      </div>
    `).join('');

    updateMatchStats();
  }

  function selectMatchItem(side, id) {
    if (side === 'left') {
      const el = document.getElementById(`match-l-${id}`);
      if (el.classList.contains('matched')) return;

      document.querySelectorAll('#match-col-left .match-item').forEach(i => i.classList.remove('selected'));
      el.classList.add('selected');
      state.matchSelectedLeft = id;
      SoundEngine.click();
    } else {
      const el = document.getElementById(`match-r-${id}`);
      if (el.classList.contains('matched')) return;

      document.querySelectorAll('#match-col-right .match-item').forEach(i => i.classList.remove('selected'));
      el.classList.add('selected');
      state.matchSelectedRight = id;
      SoundEngine.click();
    }

    // Si ambos lados están seleccionados, evaluar emparejamiento
    if (state.matchSelectedLeft && state.matchSelectedRight) {
      evaluateMatch();
    }
  }

  function evaluateMatch() {
    const leftId = state.matchSelectedLeft;
    const rightId = state.matchSelectedRight;
    const leftEl = document.getElementById(`match-l-${leftId}`);
    const rightEl = document.getElementById(`match-r-${rightId}`);

    if (leftId === rightId) {
      // ¡Acierto!
      leftEl.classList.remove('selected');
      rightEl.classList.remove('selected');
      leftEl.classList.add('matched');
      rightEl.classList.add('matched');
      state.matchedPairsCount++;
      SoundEngine.correct();

      state.matchSelectedLeft = null;
      state.matchSelectedRight = null;
      updateMatchStats();

      // Verificar si completó el nivel
      const totalPairs = window.EMPAREJAR_DATA.niveles[state.matchLevelIndex].parejas.length;
      if (state.matchedPairsCount === totalPairs) {
        SoundEngine.fanfare();
        setTimeout(() => {
          alert(`🎉 ¡Excelente! Completaste el ${window.EMPAREJAR_DATA.niveles[state.matchLevelIndex].nombre} con éxito.`);
        }, 300);
      }
    } else {
      // ¡Error!
      state.matchErrorsCount++;
      leftEl.classList.add('error-shake');
      rightEl.classList.add('error-shake');
      SoundEngine.wrong();

      setTimeout(() => {
        leftEl.classList.remove('error-shake', 'selected');
        rightEl.classList.remove('error-shake', 'selected');
        state.matchSelectedLeft = null;
        state.matchSelectedRight = null;
        updateMatchStats();
      }, 500);
    }
  }

  function updateMatchStats() {
    const totalPairs = window.EMPAREJAR_DATA.niveles[state.matchLevelIndex].parejas.length;
    document.getElementById('match-score-display').textContent = `Aciertos: ${state.matchedPairsCount} / ${totalPairs}`;
    document.getElementById('match-errors-display').textContent = `Fallos: ${state.matchErrorsCount}`;
  }

  // ==========================================================================
  // 6. MNEMOTECNIAS Y TRAMPAS DE EXAMEN
  // ==========================================================================
  function initMnemotecnias() {
    if (!window.MNEMOTECNIAS_DATA) return;
    const { acronimos, palacio_memoria, trampas_examen } = window.MNEMOTECNIAS_DATA;

    // Render Acrónimos
    const acroGrid = document.getElementById('mnemo-acronyms-grid');
    if (acroGrid) {
      acroGrid.innerHTML = acronimos.map(ac => `
        <div class="acronym-card">
          <h3 class="acronym-title">${ac.titulo}</h3>
          <div class="acronym-breakdown">
            ${ac.letras.map(l => `
              <div class="acronym-row">
                <span class="acronym-letter">${l.letra}</span>
                <div class="acronym-info">
                  <strong>${l.concepto}</strong>
                  <p>${l.detalle}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="acronym-golden-rule">
            <strong>⭐ Regla de Oro:</strong> ${ac.regla_oro}
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.3rem;">
            <em>💡 En la vida real:</em> ${ac.ejemplo_cotidiano}
          </div>
        </div>
      `).join('');
    }

    // Render Palacio de la Memoria
    const palaceGrid = document.getElementById('mnemo-palace-grid');
    if (palaceGrid) {
      palaceGrid.innerHTML = palacio_memoria.map(room => `
        <div class="palace-room-card">
          <div class="room-header">
            <span class="room-icon">${room.icono}</span>
            <h3 class="room-title">${room.sala}</h3>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${room.descripcion}</p>
          <div class="room-hitos-list">
            ${room.hitos.map(h => `
              <div class="room-hito-item">
                <strong>📍 ${h.objeto}</strong>
                <span>${h.significado}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // Render Trampas de Examen
    const trapsGrid = document.getElementById('mnemo-traps-grid');
    if (trapsGrid) {
      trapsGrid.innerHTML = trampas_examen.map(tr => `
        <div class="trap-card">
          <div class="trap-question">${tr.numero}. ${tr.trampa}</div>
          <div class="trap-wrong">
            <strong>❌ Lo que la mayoría marca mal:</strong> ${tr.error_comun}
          </div>
          <div class="trap-correct">
            <strong>✅ La Verdad Filosófica Rigurosa:</strong> ${tr.verdad_ontologica}
          </div>
          <div style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700;">
            Clave mental: ${tr.palabra_clave}
          </div>
        </div>
      `).join('');
    }
  }

  // ==========================================================================
  // 7. BANCO DE 20 EXÁMENES (400 PREGUNTAS)
  // ==========================================================================
  function initExamenesHub() {
    const hubGrid = document.getElementById('exams-cards-grid');
    if (!hubGrid || !window.EXAMENES_INFO) return;

    hubGrid.innerHTML = window.EXAMENES_INFO.map(ex => {
      const prevScore = state.allExamScores[ex.numero];
      const scoreBadge = prevScore !== undefined
        ? `<span class="exam-card-score" style="color: ${prevScore >= 14 ? 'var(--success)' : 'var(--danger)'}">
            ${prevScore >= 14 ? '✅' : '⚠️'} ${prevScore}/20 (${Math.round((prevScore/20)*100)}%)
           </span>`
        : `<span style="font-size: 0.8rem; color: var(--text-muted);">Sin intentar</span>`;

      return `
        <div class="exam-card" onclick="window.FiloApp.startExam(${ex.numero})">
          <div class="exam-card-header">
            <span class="exam-num-badge">Examen ${ex.numero}</span>
            <span style="font-size: 0.72rem; color: var(--accent-gold); font-weight: 600;">${ex.separata}</span>
          </div>
          <h3 class="exam-card-title">${ex.titulo.split(':')[1] || ex.titulo}</h3>
          <div class="exam-card-meta">
            <span>📝 ${ex.totalPreguntas} preguntas</span>
            <span>•</span>
            <span>⏱️ ~15 min</span>
          </div>
          <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
            ${scoreBadge}
            <button class="btn-primary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Empezar</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function startExam(examId) {
    state.currentExamId = examId;
    state.examQuestions = window.BANCO_PREGUNTAS.filter(q => q.examen === examId);
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.examTimer = 0;
    state.examCompleted = false;

    // Cambiar vista a la pestaña examenes
    switchView('examenes');

    // Ocultar hub y pantalla de resultados, mostrar runner
    document.getElementById('exams-hub-container').style.display = 'none';
    document.getElementById('exam-results-screen').style.display = 'none';
    const runner = document.getElementById('exam-runner-container');
    runner.style.display = 'block';

    // Iniciar temporizador
    if (state.examInterval) clearInterval(state.examInterval);
    state.examInterval = setInterval(() => {
      state.examTimer++;
      const mins = String(Math.floor(state.examTimer / 60)).padStart(2, '0');
      const secs = String(state.examTimer % 60).padStart(2, '0');
      const timerEl = document.getElementById('exam-timer-display');
      if (timerEl) timerEl.textContent = `⏱️ ${mins}:${secs}`;
    }, 1000);

    renderQuestion();
    renderQuestionGridNav();
  }

  function renderQuestion() {
    const q = state.examQuestions[state.currentQuestionIndex];
    if (!q) return;

    // Encabezado
    document.getElementById('exam-runner-title').textContent = q.tituloExamen;
    document.getElementById('q-current-number').textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${state.examQuestions.length}`;

    // Progreso
    const progressFill = document.getElementById('exam-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${((state.currentQuestionIndex + 1) / state.examQuestions.length) * 100}%`;
    }

    // Dificultad badge
    const diffBadge = document.getElementById('q-diff-badge');
    if (diffBadge) {
      diffBadge.textContent = q.dificultad;
      diffBadge.className = 'question-diff-badge ' + (
        q.dificultad === 'Fácil' ? 'badge-blue' :
        q.dificultad === 'Media' ? 'badge-gold' : 'badge-red'
      );
    }

    // Texto de la pregunta
    document.getElementById('q-text-content').textContent = q.pregunta;

    // Opciones
    const optionsContainer = document.getElementById('q-options-container');
    const letters = ['A', 'B', 'C', 'D'];
    const selectedOption = state.userAnswers[q.id];

    optionsContainer.innerHTML = q.opciones.map((opt, idx) => {
      const isSelected = selectedOption === idx;
      let extraClass = isSelected ? 'selected' : '';

      // Si el modo de feedback inmediato está activo y ya respondió
      if (state.examInstantFeedback && selectedOption !== undefined) {
        if (idx === q.correcta) extraClass += ' correct-revealed';
        else if (isSelected && idx !== q.correcta) extraClass += ' wrong-revealed';
      }

      return `
        <div class="option-item ${extraClass}" onclick="window.FiloApp.selectOption(${idx})">
          <div class="option-letter">${letters[idx]}</div>
          <div class="option-text">${opt}</div>
        </div>
      `;
    }).join('');

    // Explicación instantánea si aplica
    const instantExpl = document.getElementById('instant-explanation-box');
    if (instantExpl) {
      if (state.examInstantFeedback && selectedOption !== undefined) {
        instantExpl.style.display = 'block';
        instantExpl.innerHTML = `
          <div style="font-weight: 700; color: ${selectedOption === q.correcta ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 0.3rem;">
            ${selectedOption === q.correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
          </div>
          <div style="font-size: 0.88rem; margin-bottom: 0.4rem;"><strong>Fundamento:</strong> ${q.explicacionDetallada}</div>
          <div style="font-size: 0.85rem; color: var(--accent-gold);"><strong>En cristiano:</strong> ${q.explicacionAlternativa}</div>
        `;
      } else {
        instantExpl.style.display = 'none';
      }
    }

    // Botones de navegación
    document.getElementById('btn-prev-q').disabled = state.currentQuestionIndex === 0;
    const btnNext = document.getElementById('btn-next-q');
    if (state.currentQuestionIndex === state.examQuestions.length - 1) {
      btnNext.innerHTML = '🏁 Finalizar Examen';
    } else {
      btnNext.innerHTML = 'Siguiente ➡️';
    }

    updateQuestionGridNav();
  }

  function selectOption(optIndex) {
    const q = state.examQuestions[state.currentQuestionIndex];
    if (!q) return;

    state.userAnswers[q.id] = optIndex;
    SoundEngine.click();

    if (state.examInstantFeedback) {
      if (optIndex === q.correcta) SoundEngine.correct();
      else SoundEngine.wrong();
    }

    renderQuestion();
  }

  function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderQuestion();
      SoundEngine.click();
    }
  }

  function nextQuestion() {
    if (state.currentQuestionIndex < state.examQuestions.length - 1) {
      state.currentQuestionIndex++;
      renderQuestion();
      SoundEngine.click();
    } else {
      finishExam();
    }
  }

  function renderQuestionGridNav() {
    const navGrid = document.getElementById('questions-nav-dots');
    if (!navGrid) return;

    navGrid.innerHTML = state.examQuestions.map((q, idx) => `
      <button class="q-dot-btn" id="q-dot-${idx}" onclick="window.FiloApp.jumpToQuestion(${idx})">
        ${idx + 1}
      </button>
    `).join('');

    updateQuestionGridNav();
  }

  function updateQuestionGridNav() {
    state.examQuestions.forEach((q, idx) => {
      const btn = document.getElementById(`q-dot-${idx}`);
      if (!btn) return;

      btn.classList.toggle('current', idx === state.currentQuestionIndex);
      btn.classList.toggle('answered', state.userAnswers[q.id] !== undefined);
    });
  }

  function jumpToQuestion(idx) {
    state.currentQuestionIndex = idx;
    renderQuestion();
    SoundEngine.click();
  }

  function toggleInstantFeedback() {
    state.examInstantFeedback = !state.examInstantFeedback;
    const btn = document.getElementById('toggle-instant-feedback-btn');
    if (btn) {
      btn.textContent = state.examInstantFeedback ? '⚡ Feedback Inmediato: ON' : '⚡ Feedback Inmediato: OFF';
      btn.classList.toggle('active', state.examInstantFeedback);
    }
    renderQuestion();
  }

  // ==========================================================================
  // 8. FINALIZACIÓN Y REVISIÓN PROFUNDA DE ERRORES
  // ==========================================================================
  function finishExam() {
    if (state.examInterval) clearInterval(state.examInterval);
    state.examCompleted = true;

    // Calcular puntaje
    let correctCount = 0;
    const mistakes = [];

    state.examQuestions.forEach(q => {
      const userChoice = state.userAnswers[q.id];
      if (userChoice === q.correcta) {
        correctCount++;
      } else {
        mistakes.push({
          question: q,
          userChoice: userChoice !== undefined ? userChoice : -1
        });

        // Registrar en cuaderno global de errores si no está ya
        if (!state.globalMistakes.some(m => m.id === q.id)) {
          state.globalMistakes.push({
            id: q.id,
            pregunta: q.pregunta,
            opciones: q.opciones,
            correcta: q.correcta,
            userChoice: userChoice !== undefined ? userChoice : -1,
            seccion: q.seccion,
            separata: q.separata,
            explicacionDetallada: q.explicacionDetallada,
            explicacionAlternativa: q.explicacionAlternativa,
            dificultad: q.dificultad
          });
        }
      }
    });

    // Guardar errores y puntaje
    localStorage.setItem('filo_mistakes', JSON.stringify(state.globalMistakes));
    state.allExamScores[state.currentExamId] = correctCount;
    localStorage.setItem('filo_scores', JSON.stringify(state.allExamScores));

    // Audio
    if (correctCount >= 14) SoundEngine.fanfare();
    else SoundEngine.wrong();

    updateQuickStats();
    initExamenesHub();

    // Renderizar resultados
    renderExamResults(correctCount, mistakes);
  }

  function renderExamResults(correctCount, mistakes) {
    document.getElementById('exam-runner-container').style.display = 'none';
    const screen = document.getElementById('exam-results-screen');
    screen.style.display = 'block';

    const total = state.examQuestions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    const passed = correctCount >= 14;

    const circle = document.getElementById('results-circle');
    circle.textContent = `${correctCount}/${total}`;
    circle.className = `results-grade-circle ${passed ? 'grade-pass' : 'grade-fail'}`;

    document.getElementById('results-grade-title').textContent = passed
      ? '🎉 ¡Aprobaste con honores!'
      : '⚠️ Necesitas reforzar esta sección';

    document.getElementById('results-grade-desc').textContent = passed
      ? `Has demostrado un gran dominio de los conceptos filosóficos de este examen (${scorePct}% de aciertos).`
      : `Obtuviste ${scorePct}%. Revisa a continuación cada error: la plataforma te explica la teoría original y una analogía cotidiana para que no se te olvide.`;

    document.getElementById('res-correct-val').textContent = correctCount;
    document.getElementById('res-wrong-val').textContent = total - correctCount;
    document.getElementById('res-time-val').textContent = `${Math.floor(state.examTimer / 60)}m ${state.examTimer % 60}s`;

    // Renderizar lista detallada de errores
    const mistakesContainer = document.getElementById('results-mistakes-list');
    if (mistakes.length === 0) {
      mistakesContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <span style="font-size: 2rem;">🌟</span>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--success); margin: 0.5rem 0;">¡Examen Perfecto: 0 Errores!</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">No fallaste ninguna pregunta. Estás listo para el examen real en este tema.</p>
        </div>
      `;
    } else {
      mistakesContainer.innerHTML = `
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; color: var(--danger);">
          🚨 Análisis Profundo de tus ${mistakes.length} Fallos (Lee y Comprende):
        </h3>
      ` + mistakes.map((item, idx) => renderMistakeReviewCard(item.question, item.userChoice, idx)).join('');
    }
  }

  function renderMistakeReviewCard(q, userChoice, idx) {
    const letters = ['A', 'B', 'C', 'D'];
    const userAnsText = userChoice >= 0 ? q.opciones[userChoice] : 'Sin responder';
    const correctAnsText = q.opciones[q.correcta];

    return `
      <div class="review-item-card is-wrong" id="review-card-${idx}">
        <div class="review-meta-row">
          <span><strong>Fuente:</strong> ${q.separata} • <em>${q.seccion}</em></span>
          <span class="question-diff-badge ${q.dificultad === 'Fácil' ? 'badge-blue' : q.dificultad === 'Media' ? 'badge-gold' : 'badge-red'}">
            ${q.dificultad}
          </span>
        </div>

        <div class="review-q-text">${q.pregunta}</div>

        <div class="review-answers-box">
          <div class="review-ans-row user-wrong-choice">
            <strong>❌ Tu respuesta:</strong> ${userChoice >= 0 ? `(${letters[userChoice]}) ` : ''}${userAnsText}
          </div>
          <div class="review-ans-row correct-choice">
            <strong>✅ Respuesta correcta:</strong> (${letters[q.correcta]}) ${correctAnsText}
          </div>
        </div>

        <!-- Teoría profunda del fallo -->
        <div class="deep-dive-panel">
          <div class="deep-dive-header">
            <span>📖 Fundamento Teórico Original de la Separata:</span>
          </div>
          <div class="deep-dive-text">${q.explicacionDetallada}</div>

          <!-- Botón de explicación alternativa intuitiva -->
          <button class="alt-expl-toggle-btn" onclick="window.FiloApp.toggleAltExpl(${idx})">
            💡 ¿No te quedó del todo claro? Clic aquí para explicártelo de otra forma
          </button>

          <div class="alt-expl-box" id="alt-box-${idx}">
            <strong>🗣️ Explicación "En Cristiano" con Analogía Cotidiana:</strong>
            <p style="margin-top: 0.35rem;">${q.explicacionAlternativa}</p>
          </div>
        </div>
      </div>
    `;
  }

  function toggleAltExpl(idx) {
    const box = document.getElementById(`alt-box-${idx}`);
    if (box) {
      box.classList.toggle('open');
      SoundEngine.click();
    }
  }

  function backToExamsHub() {
    if (state.examInterval) clearInterval(state.examInterval);
    document.getElementById('exam-runner-container').style.display = 'none';
    document.getElementById('exam-results-screen').style.display = 'none';
    document.getElementById('exams-hub-container').style.display = 'block';
    SoundEngine.click();
  }

  // ==========================================================================
  // 9. CUADERNO GLOBAL DE ERRORES ACUMULADOS
  // ==========================================================================
  function renderGlobalMistakes() {
    const container = document.getElementById('global-mistakes-container');
    if (!container) return;

    if (state.globalMistakes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; background: var(--bg-secondary); border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
          <span style="font-size: 3rem;">🎉</span>
          <h3 style="font-size: 1.3rem; font-weight: 800; margin: 0.75rem 0; color: var(--success);">
            ¡Tu Cuaderno de Errores está Limpio!
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">
            A medida que resuelvas los 20 exámenes, cualquier pregunta que falles se guardará automáticamente aquí con su fundamentación teórica y analogía para que la repases antes del examen.
          </p>
          <button class="btn-primary" onclick="window.FiloApp.switchView('examenes')">
            Ir a Resolver Exámenes
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800;">Tienes ${state.globalMistakes.length} preguntas guardadas para refuerzo</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Repásalas a conciencia para no volver a equivocarte en las preguntas trampa.</p>
        </div>
        <button class="btn-secondary" onclick="window.FiloApp.clearGlobalMistakes()">
          🗑️ Limpiar Historial de Errores
        </button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${state.globalMistakes.map((m, idx) => renderMistakeReviewCard(m, m.userChoice, `global-${idx}`)).join('')}
      </div>
    `;
  }

  function clearGlobalMistakes() {
    if (confirm('¿Estás seguro de que deseas limpiar tu cuaderno de errores?')) {
      state.globalMistakes = [];
      localStorage.removeItem('filo_mistakes');
      renderGlobalMistakes();
      updateQuickStats();
      SoundEngine.click();
    }
  }

  // ==========================================================================
  // 10. BÚSQUEDA UNIVERSAL RÁPIDA
  // ==========================================================================
  function handleUniversalSearch(query) {
    state.searchQuery = query;
    if (state.currentView === 'glosario') {
      renderGlosarioCards();
    }
  }

  function goToTeoria(modId) {
    switchView('teoria');
    selectTeoriaModule(modId);
  }

  function closeModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.classList.remove('open');
  }

  // --- API PÚBLICA PARA EL DOM ---
  window.FiloApp = {
    switchView,
    toggleTheme,
    toggleSound,
    goToTeoria,
    selectTeoriaModule,
    toggleChapter,
    filterGlosario,
    filterFlashcards,
    shuffleFlashcards,
    flipFlashcard,
    nextFlashcard,
    prevFlashcard,
    markFlashcard,
    startMatchLevel,
    selectMatchItem,
    startExam,
    selectOption,
    prevQuestion,
    nextQuestion,
    jumpToQuestion,
    toggleInstantFeedback,
    finishExam,
    toggleAltExpl,
    backToExamsHub,
    clearGlobalMistakes
  };

})();
