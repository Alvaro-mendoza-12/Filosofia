/* ============================================================
   FILOMASTER - LÓGICA DE APLICACIÓN DINÁMICA & PEDAGÓGICA
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // Verificar que data.js cargó correctamente
    if (typeof TEMAS === 'undefined' || typeof FLASHCARDS === 'undefined' || typeof TODOS_LOS_EXAMENES === 'undefined') {
        console.error("Error: No se encontraron los datos de data.js");
        alert("Error cargando la base de datos de Filosofía. Asegúrate de tener data.js en la misma carpeta.");
        return;
    }

    // ============================================================
    // 1. NAVEGACIÓN PRINCIPAL ENTRE PESTAÑAS
    // ============================================================
    const navButtons = document.querySelectorAll(".nav-btn");
    const viewPanels = document.querySelectorAll(".view-panel");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            
            navButtons.forEach(b => b.classList.remove("active"));
            viewPanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ============================================================
    // 2. MÓDULO DE TEORÍA ESTRUCTURADA & AUDIO
    // ============================================================
    const topicsPillNav = document.getElementById("topics-pill-nav");
    const topicDetailContainer = document.getElementById("topic-detail-container");
    const theorySearchInput = document.getElementById("theory-search-input");

    let currentTopicIndex = 0;
    let synth = window.speechSynthesis;
    let currentUtterance = null;
    let isSpeaking = false;

    // Función para detener el habla
    function stopSpeech() {
        if (synth && synth.speaking) {
            synth.cancel();
        }
        isSpeaking = false;
        const audioBtns = document.querySelectorAll(".btn-audio-speak");
        audioBtns.forEach(btn => {
            btn.classList.remove("playing");
            btn.innerHTML = `🎧 Escuchar este Tema`;
        });
    }

    // Renderizar píldoras de navegación de temas
    function renderTopicPills() {
        topicsPillNav.innerHTML = "";
        TEMAS.forEach((tema, index) => {
            const pill = document.createElement("button");
            pill.className = `topic-pill ${index === currentTopicIndex ? 'active' : ''}`;
            pill.innerHTML = `<span>${tema.emoji}</span> <span>${tema.titulo}</span>`;
            pill.addEventListener("click", () => {
                stopSpeech();
                currentTopicIndex = index;
                renderTopicPills();
                renderTopicDetail(TEMAS[currentTopicIndex]);
            });
            topicsPillNav.appendChild(pill);
        });
    }

    // Renderizar contenido completo del tema seleccionado
    function renderTopicDetail(tema) {
        if (!tema) return;

        let contentHTML = `
            <div class="topic-header-banner" style="background: linear-gradient(135deg, ${tema.color}15, ${tema.color}30); border-left: 6px solid ${tema.color};">
                <h3><span>${tema.emoji}</span> ${tema.titulo}</h3>
                <div class="topic-audio-control">
                    <button class="btn-audio-speak" id="btn-topic-audio">
                        🎧 Escuchar este Tema
                    </button>
                </div>
            </div>

            <div class="topic-summary-box">
                <strong>📌 En síntesis:</strong> ${tema.resumen}
            </div>

            <div class="topic-subsections-grid">
        `;

        tema.contenido.forEach(sub => {
            // Formatear negritas simples si vienen con viñetas o mayúsculas
            const formattedText = sub.texto.replace(/([A-ZÁÉÍÓÚÑ\s]{4,}):/g, '<strong>$1:</strong>');
            contentHTML += `
                <article class="theory-card">
                    <h4>📘 ${sub.subtitulo}</h4>
                    <div class="theory-card-body">${formattedText}</div>
                </article>
            `;
        });

        contentHTML += `</div>`;
        topicDetailContainer.innerHTML = contentHTML;

        // Configurar botón de audio
        const audioBtn = document.getElementById("btn-topic-audio");
        if (audioBtn) {
            audioBtn.addEventListener("click", () => {
                if (isSpeaking) {
                    stopSpeech();
                } else {
                    playTopicSpeech(tema, audioBtn);
                }
            });
        }
    }

    // Función Text-to-Speech
    function playTopicSpeech(tema, btnEl) {
        if (!synth) {
            alert("Tu navegador no soporta reproducción de voz.");
            return;
        }

        stopSpeech();

        let fullSpeechText = `${tema.titulo}. ${tema.resumen}. `;
        tema.contenido.forEach(c => {
            fullSpeechText += `${c.subtitulo}. ${c.texto}. `;
        });

        // Limitar caracteres por seguridad en synthesis
        currentUtterance = new SpeechSynthesisUtterance(fullSpeechText);
        currentUtterance.lang = "es-ES";
        currentUtterance.rate = 1.0;

        currentUtterance.onend = () => {
            stopSpeech();
        };

        currentUtterance.onerror = () => {
            stopSpeech();
        };

        synth.speak(currentUtterance);
        isSpeaking = true;
        btnEl.classList.add("playing");
        btnEl.innerHTML = `⏹️ Detener Voz`;
    }

    // Buscador en tiempo real
    if (theorySearchInput) {
        theorySearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                renderTopicDetail(TEMAS[currentTopicIndex]);
                return;
            }

            stopSpeech();
            let matchesHTML = `<div class="topic-subsections-grid">`;
            let matchCount = 0;

            TEMAS.forEach(tema => {
                tema.contenido.forEach(sub => {
                    if (sub.subtitulo.toLowerCase().includes(query) || sub.texto.toLowerCase().includes(query)) {
                        matchCount++;
                        matchesHTML += `
                            <article class="theory-card" style="border-left: 4px solid ${tema.color};">
                                <div style="font-size: 0.8rem; color: ${tema.color}; font-weight: 800; margin-bottom: 6px;">
                                    ${tema.emoji} ${tema.titulo}
                                </div>
                                <h4>📘 ${sub.subtitulo}</h4>
                                <div class="theory-card-body">${sub.texto}</div>
                            </article>
                        `;
                    }
                });
            });

            matchesHTML += `</div>`;

            if (matchCount === 0) {
                topicDetailContainer.innerHTML = `
                    <div style="text-align:center; padding: 40px; color: var(--text-muted);">
                        <p style="font-size: 2rem;">🔍</p>
                        <h3>No se encontraron conceptos para "${query}"</h3>
                        <p>Intenta buscar palabras como: Sócrates, Ocio, Causa, Platón, Descartes, Docta ignorancia...</p>
                    </div>
                `;
            } else {
                topicDetailContainer.innerHTML = `
                    <div style="margin-bottom: 20px; font-weight: 700; color: var(--primary);">
                        Resultados encontrados: ${matchCount} fragmentos
                    </div>
                    ${matchesHTML}
                `;
            }
        });
    }

    // Inicializar Teoría
    renderTopicPills();
    renderTopicDetail(TEMAS[0]);


    // ============================================================
    // 3. MÓDULO DE FLASHCARDS (TARJETITAS & TRAMPAS)
    // ============================================================
    const card3dScene = document.getElementById("card-3d-scene");
    const cardTextFront = document.getElementById("card-text-front");
    const cardTextBack = document.getElementById("card-text-back");
    const cardBadgeFront = document.getElementById("card-badge-front");
    const fcCounterBadge = document.getElementById("fc-counter-badge");
    const btnFcPrev = document.getElementById("btn-fc-prev");
    const btnFcNext = document.getElementById("btn-fc-next");
    const btnFcFlip = document.getElementById("btn-fc-flip");
    const btnFcRandom = document.getElementById("btn-fc-random");
    const fcFilterBtns = document.querySelectorAll(".filter-btn");

    let currentCardList = [...FLASHCARDS];
    let currentCardIndex = 0;

    function updateCardView() {
        if (!currentCardList || currentCardList.length === 0) return;

        card3dScene.classList.remove("is-flipped");

        setTimeout(() => {
            const card = currentCardList[currentCardIndex];
            const isTrampa = card.q.includes("TRAMPA");

            if (isTrampa) {
                cardBadgeFront.className = "card-badge badge-trampa";
                cardBadgeFront.textContent = "⚠️ PREGUNTA TRAMPA";
            } else {
                cardBadgeFront.className = "card-badge";
                cardBadgeFront.textContent = "💡 CONCEPTO CLAVE";
            }

            cardTextFront.textContent = card.q;
            cardTextBack.textContent = card.a;
            fcCounterBadge.textContent = `Tarjeta ${currentCardIndex + 1} de ${currentCardList.length}`;
        }, 150);
    }

    function flipCard() {
        card3dScene.classList.toggle("is-flipped");
    }

    function nextCard() {
        currentCardIndex = (currentCardIndex + 1) % currentCardList.length;
        updateCardView();
    }

    function prevCard() {
        currentCardIndex = (currentCardIndex - 1 + currentCardList.length) % currentCardList.length;
        updateCardView();
    }

    function randomCard() {
        const randomIndex = Math.floor(Math.random() * currentCardList.length);
        currentCardIndex = randomIndex;
        updateCardView();
    }

    // Eventos de Flashcards
    card3dScene.addEventListener("click", flipCard);
    btnFcFlip.addEventListener("click", flipCard);
    btnFcNext.addEventListener("click", nextCard);
    btnFcPrev.addEventListener("click", prevCard);
    btnFcRandom.addEventListener("click", randomCard);

    // Atajos de teclado para Flashcards (cuando la vista está activa)
    document.addEventListener("keydown", (e) => {
        const fcView = document.getElementById("view-flashcards");
        if (!fcView.classList.contains("active")) return;

        if (e.code === "Space") {
            e.preventDefault();
            flipCard();
        } else if (e.code === "ArrowRight") {
            e.preventDefault();
            nextCard();
        } else if (e.code === "ArrowLeft") {
            e.preventDefault();
            prevCard();
        }
    });

    // Filtros de Flashcards
    fcFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            fcFilterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");

            if (filter === "trampa") {
                currentCardList = FLASHCARDS.filter(c => c.q.includes("TRAMPA"));
            } else if (filter === "concepto") {
                currentCardList = FLASHCARDS.filter(c => !c.q.includes("TRAMPA"));
            } else {
                currentCardList = [...FLASHCARDS];
            }

            currentCardIndex = 0;
            updateCardView();
        });
    });

    // Inicializar Flashcards
    updateCardView();


    // ============================================================
    // 4. MÓDULO DE SIMULADORES DE EXAMEN (20 EXÁMENES)
    // ============================================================
    const examCatalogView = document.getElementById("exam-catalog-view");
    const examActiveView = document.getElementById("exam-active-view");
    const examResultsView = document.getElementById("exam-results-view");
    const examGrid = document.getElementById("exam-grid");
    const activeExamTitle = document.getElementById("active-exam-title");
    const questionsList = document.getElementById("questions-list");
    const examAnsweredCount = document.getElementById("exam-answered-count");
    const examProgressFill = document.getElementById("exam-progress-fill");
    const btnSubmitExam = document.getElementById("btn-submit-exam");
    const btnBackToCatalog = document.getElementById("btn-back-to-catalog");
    const resultScoreCard = document.getElementById("result-score-card");
    const reviewQuestionsList = document.getElementById("review-questions-list");
    const btnRetrySameExam = document.getElementById("btn-retry-same-exam");
    const btnGotoAnotherExam = document.getElementById("btn-goto-another-exam");
    const btnFilterOnlyErrors = document.getElementById("btn-filter-only-errors");
    const btnShowAllReview = document.getElementById("btn-show-all-review");

    let currentActiveExamIndex = 0;
    let userAnswers = {}; // { qIndex: selectedOptionIndex }
    let examScoresHistory = JSON.parse(localStorage.getItem("filo_exam_scores") || "{}");

    // Renderizar catálogo de los 20 exámenes
    function renderExamCatalog() {
        examGrid.innerHTML = "";

        TODOS_LOS_EXAMENES.forEach((exam, idx) => {
            const card = document.createElement("div");
            card.className = "exam-card-button";

            const historyScore = examScoresHistory[idx];
            let statusText = "Sin rendir";
            let statusClass = "";

            if (historyScore !== undefined) {
                if (historyScore >= 14) {
                    statusText = `Aprobado: ${historyScore}/20 ⭐`;
                    statusClass = "passed";
                } else {
                    statusText = `Nota: ${historyScore}/20 (Requiere repaso)`;
                    statusClass = "failed";
                }
            }

            card.innerHTML = `
                <div>
                    <div class="exam-card-badge">Simulador Oficial #${idx + 1}</div>
                    <div class="exam-card-title">Examen Práctico ${idx + 1}</div>
                    <div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">
                        20 Preguntas de selección múltiple
                    </div>
                </div>
                <div class="exam-card-status ${statusClass}">
                    ${statusText}
                </div>
            `;

            card.addEventListener("click", () => {
                startExam(idx);
            });

            examGrid.appendChild(card);
        });
    }

    // Iniciar examen específico
    function startExam(examIndex) {
        currentActiveExamIndex = examIndex;
        userAnswers = {};

        examCatalogView.style.display = "none";
        examResultsView.style.display = "none";
        examActiveView.style.display = "block";

        activeExamTitle.textContent = `Simulador #${examIndex + 1}: Examen Completo de Filosofía`;
        updateExamProgress();

        const questions = TODOS_LOS_EXAMENES[examIndex];
        questionsList.innerHTML = "";

        questions.forEach((q, qIdx) => {
            const qBox = document.createElement("div");
            qBox.className = "exam-q-box";
            qBox.id = `qbox-${qIdx}`;

            let optionsHTML = "";
            q.ops.forEach((opt, optIdx) => {
                const optLetter = String.fromCharCode(65 + optIdx); // A, B, C, D
                optionsHTML += `
                    <label class="q-option-label" data-qidx="${qIdx}" data-optidx="${optIdx}">
                        <input type="radio" name="question_${qIdx}" value="${optIdx}">
                        <span><strong>${optLetter})</strong> ${opt}</span>
                    </label>
                `;
            });

            qBox.innerHTML = `
                <div class="exam-q-header">
                    <span class="q-num-pill">Pregunta ${qIdx + 1}</span>
                    <div class="q-text">${q.p}</div>
                </div>
                <div class="q-options-group">
                    ${optionsHTML}
                </div>
            `;

            questionsList.appendChild(qBox);
        });

        // Event listeners para marcar alternativas
        const optionLabels = questionsList.querySelectorAll(".q-option-label");
        optionLabels.forEach(label => {
            label.addEventListener("click", (e) => {
                const qIdx = parseInt(label.getAttribute("data-qidx"));
                const optIdx = parseInt(label.getAttribute("data-optidx"));

                userAnswers[qIdx] = optIdx;

                // Actualizar estilos de selección
                const parentGroup = label.closest(".q-options-group");
                parentGroup.querySelectorAll(".q-option-label").forEach(l => l.classList.remove("selected"));
                label.classList.add("selected");

                const radioInput = label.querySelector("input[type='radio']");
                if (radioInput) radioInput.checked = true;

                // Marcar la caja como respondida
                const qBox = document.getElementById(`qbox-${qIdx}`);
                if (qBox) qBox.classList.add("answered");

                updateExamProgress();
            });
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Actualizar barra de progreso del examen
    function updateExamProgress() {
        const total = 20;
        const answered = Object.keys(userAnswers).length;
        const percentage = Math.round((answered / total) * 100);

        examAnsweredCount.textContent = `Respondidas: ${answered} / ${total}`;
        examProgressFill.style.width = `${percentage}%`;
    }

    // Entregar examen y evaluar
    btnSubmitExam.addEventListener("click", () => {
        const total = 20;
        const answered = Object.keys(userAnswers).length;

        if (answered < total) {
            const confirmSubmit = confirm(`Has respondido ${answered} de ${total} preguntas. ¿Seguro que deseas entregar el examen ahora? Las preguntas sin responder se calificarán como incorrectas.`);
            if (!confirmSubmit) return;
        }

        evaluateExam();
    });

    // Evaluar examen y mostrar retroalimentación detallada
    function evaluateExam() {
        const questions = TODOS_LOS_EXAMENES[currentActiveExamIndex];
        let correctCount = 0;

        questions.forEach((q, idx) => {
            if (userAnswers[idx] === q.r) {
                correctCount++;
            }
        });

        // Guardar puntaje en localStorage
        examScoresHistory[currentActiveExamIndex] = correctCount;
        localStorage.setItem("filo_exam_scores", JSON.stringify(examScoresHistory));

        // Ocultar examen activo y mostrar vista de resultados
        examActiveView.style.display = "none";
        examResultsView.style.display = "block";

        const isPassed = correctCount >= 14;
        const percentage = Math.round((correctCount / 20) * 100);

        resultScoreCard.className = `result-score-card ${isPassed ? 'passed' : 'failed'}`;
        resultScoreCard.innerHTML = `
            <div class="result-badge-status">${isPassed ? '¡EXAMEN APROBADO!' : 'NECESITAS REFORZAR'}</div>
            <div class="score-big-number">${correctCount} / 20</div>
            <div style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">
                ${percentage}% de aciertos • Nota mínima aprobatoria USAT: 14/20
            </div>
            <div class="result-feedback-text">
                ${isPassed 
                    ? '🎉 ¡Excelente dominio de la filosofía! Has demostrado comprensión profunda de los autores, conceptos y métodos.' 
                    : '📖 Revisa las explicaciones de las preguntas que fallaste abajo para que no caigas en las mismas trampas mañana.'}
            </div>
        `;

        renderReviewQuestions(false);
        renderExamCatalog(); // Actualizar estado en el catálogo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Renderizar preguntas para revisión con verde, rojo y explicación
    function renderReviewQuestions(onlyErrors = false) {
        const questions = TODOS_LOS_EXAMENES[currentActiveExamIndex];
        reviewQuestionsList.innerHTML = "";

        questions.forEach((q, idx) => {
            const userChoice = userAnswers[idx];
            const isCorrect = userChoice === q.r;

            if (onlyErrors && isCorrect) return;

            const card = document.createElement("div");
            card.className = `review-q-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

            let optionsHTML = "";
            q.ops.forEach((opt, optIdx) => {
                const optLetter = String.fromCharCode(65 + optIdx);
                let optClass = "opt-neutral";

                if (optIdx === q.r) {
                    optClass = "opt-correct";
                } else if (userChoice === optIdx && !isCorrect) {
                    optClass = "opt-user-wrong";
                }

                optionsHTML += `
                    <div class="review-opt-item ${optClass}">
                        <span>${optIdx === q.r ? '✅' : (userChoice === optIdx ? '❌' : '⚪')}</span>
                        <span><strong>${optLetter})</strong> ${opt}</span>
                    </div>
                `;
            });

            card.innerHTML = `
                <div class="review-q-status">
                    ${isCorrect ? '✨ RESPUESTA CORRECTA' : '❌ RESPUESTA INCORRECTA'} (Pregunta ${idx + 1})
                </div>
                <div class="review-q-title">${q.p}</div>
                <div class="review-options-list">
                    ${optionsHTML}
                </div>
                <div class="review-explanation-box">
                    <strong>💡 Fundamento & Por qué es la respuesta correcta:</strong>
                    ${q.exp}
                </div>
            `;

            reviewQuestionsList.appendChild(card);
        });
    }

    // Controles de resultados
    btnRetrySameExam.addEventListener("click", () => {
        startExam(currentActiveExamIndex);
    });

    btnGotoAnotherExam.addEventListener("click", () => {
        examResultsView.style.display = "none";
        examCatalogView.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btnBackToCatalog.addEventListener("click", () => {
        examActiveView.style.display = "none";
        examCatalogView.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btnFilterOnlyErrors.addEventListener("click", () => {
        renderReviewQuestions(true);
        btnFilterOnlyErrors.style.display = "none";
        btnShowAllReview.style.display = "inline-block";
    });

    btnShowAllReview.addEventListener("click", () => {
        renderReviewQuestions(false);
        btnShowAllReview.style.display = "none";
        btnFilterOnlyErrors.style.display = "inline-block";
    });

    // Inicializar catálogo de exámenes
    renderExamCatalog();
});
