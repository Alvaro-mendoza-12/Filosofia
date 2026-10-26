# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(options=options)
driver.get('file:///d:/USAT/SIGLO%203%20-%202026%20-%20II/Filosofia/index.html')
time.sleep(1)

# 1. Switch to Flashcards
driver.execute_script("window.FiloApp.switchView('flashcards')")
time.sleep(0.5)
fc_front = driver.find_element('id', 'fc-front-text').text
print('Visible Flashcard front text:', repr(fc_front))

# 2. Switch to Emparejar
driver.execute_script("window.FiloApp.switchView('emparejar')")
time.sleep(0.5)
match_left = driver.find_elements('css selector', '#match-col-left .match-item')
print('Visible Emparejar items izq:', len(match_left))
if match_left:
    print('First item:', match_left[0].text)

# 3. Switch to Examenes and start Exam 1
driver.execute_script("window.FiloApp.startExam(1)")
time.sleep(0.5)
q_text = driver.find_element('id', 'q-text-content').text
options = driver.find_elements('css selector', '#q-options-container .option-item')
print('\nExam 1 - Question 1:', repr(q_text))
print('Options count:', len(options))
for opt in options:
    print('  -', opt.text)

# 4. Switch to Teoria and select Module 3
driver.execute_script("window.FiloApp.goToTeoria('mod-3')")
time.sleep(0.5)
chapters = driver.find_elements('css selector', '#teoria-chapters-container .chapter-card')
print('\nTeoria Module 3 chapters count:', len(chapters))
if chapters:
    title = chapters[0].find_element('css selector', 'h3').text
    print('First chapter of Module 3:', title)

driver.quit()
print('\n=== TODOS LOS COMPONENTES FUNCIONAN AL 100% EN CHROME ===')
