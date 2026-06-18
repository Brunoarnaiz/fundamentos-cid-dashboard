const app = {
    theme: localStorage.getItem('theme') || 'light',
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        document.getElementById('theme-icon').textContent = this.theme === 'light' ? '🌙' : '☀️';
    },
    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        document.getElementById('theme-icon').textContent = this.theme === 'light' ? '🌙' : '☀️';
    }
};

const router = {
    currentSection: 'theory',
    navigate(section) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.nav-btn[data-section="${section}"]`).classList.add('active');
        this.currentSection = section;
        if (section === 'flashcards') flashcardsModule.init();
        if (section === 'test') testModule.init();
    }
};

// ============================================================
// MODULO TEORIA
// ============================================================
const theoryModule = {
    currentTheme: null,
    init() {
        this.renderThemeList();
        this.renderThemeCards();
    },
    renderThemeList() {
        const list = document.getElementById('theme-list');
        list.innerHTML = theoryData.map(t => `
            <div class="theme-item ${t.id === this.currentTheme ? 'active' : ''}" onclick="theoryModule.loadTheme(${t.id})">
                <span class="theme-number">${t.id}</span>${t.title}
            </div>
        `).join('');
    },
    renderThemeCards() {
        const container = document.getElementById('theme-cards');
        container.innerHTML = theoryData.map(t => `
            <div class="theme-card" onclick="theoryModule.loadTheme(${t.id})">
                <h3>Tema ${t.id}</h3>
                <p>${t.summary}</p>
            </div>
        `).join('');
    },
    loadTheme(id) {
        this.currentTheme = id;
        this.renderThemeList();
        const theme = theoryData.find(t => t.id === id);
        const content = document.getElementById('theory-content');
        content.innerHTML = `
            <h2>${theme.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 1.05rem;">${theme.summary}</p>
            ${theme.sections.map(s => `
                <div class="theory-section">
                    <h3>${s.title}</h3>
                    ${s.content}
                </div>
            `).join('')}
            <button class="btn-secondary" onclick="theoryModule.showWelcome()" style="margin-top: 20px;">← Volver al indice</button>
        `;
    },
    showWelcome() {
        this.currentTheme = null;
        this.renderThemeList();
        document.getElementById('theory-content').innerHTML = `
            <div class="welcome-message">
                <h2>Bienvenido al modulo de Teoria</h2>
                <p>Selecciona un tema del menu lateral para comenzar a estudiar.</p>
                <div class="theme-cards" id="theme-cards"></div>
            </div>
        `;
        this.renderThemeCards();
    },
    search(query) {
        if (!query.trim()) {
            this.renderThemeList();
            return;
        }
        const q = query.toLowerCase();
        const list = document.getElementById('theme-list');
        list.innerHTML = theoryData.map(t => {
            const matches = t.summary.toLowerCase().includes(q) ||
                t.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q));
            if (!matches) return '';
            return `
                <div class="theme-item ${t.id === this.currentTheme ? 'active' : ''}" onclick="theoryModule.loadTheme(${t.id})">
                    <span class="theme-number">${t.id}</span>${t.title}
                </div>
            `;
        }).join('');
    }
};

// ============================================================
// MODULO FLASHCARDS
// ============================================================
const flashcardsModule = {
    cards: [],
    currentIndex: 0,
    filter: 'all',
    stats: { easy: [], difficult: [] },
    init() {
        this.filter = 'all';
        this.currentIndex = 0;
        this.applyFilter();
        this.render();
    },
    applyFilter() {
        if (this.filter === 'all') {
            this.cards = [...flashcardsData];
        } else {
            this.cards = flashcardsData.filter(c => c.tema == this.filter);
        }
        this.currentIndex = 0;
    },
    filterByTheme(theme) {
        this.filter = theme;
        this.applyFilter();
        this.render();
    },
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        this.currentIndex = 0;
        this.render();
    },
    flip() {
        document.getElementById('flashcard').classList.toggle('flipped');
    },
    next() {
        if (this.currentIndex < this.cards.length - 1) {
            document.getElementById('flashcard').classList.remove('flipped');
            setTimeout(() => {
                this.currentIndex++;
                this.render();
            }, 150);
        }
    },
    prev() {
        if (this.currentIndex > 0) {
            document.getElementById('flashcard').classList.remove('flipped');
            setTimeout(() => {
                this.currentIndex--;
                this.render();
            }, 150);
        }
    },
    markEasy() {
        const card = this.cards[this.currentIndex];
        if (!this.stats.easy.includes(card.id)) this.stats.easy.push(card.id);
        this.stats.difficult = this.stats.difficult.filter(id => id !== card.id);
        this.next();
    },
    markDifficult() {
        const card = this.cards[this.currentIndex];
        if (!this.stats.difficult.includes(card.id)) this.stats.difficult.push(card.id);
        this.stats.easy = this.stats.easy.filter(id => id !== card.id);
        this.next();
    },
    render() {
        if (this.cards.length === 0) {
            document.getElementById('flashcard-front-text').textContent = 'No hay flashcards para este filtro';
            document.getElementById('flashcard-back-text').textContent = '';
            document.getElementById('flashcard-counter').textContent = '0 / 0';
            return;
        }
        const card = this.cards[this.currentIndex];
        document.getElementById('flashcard-front-text').textContent = card.anverso;
        document.getElementById('flashcard-back-text').textContent = card.reverso;
        document.getElementById('flashcard-counter').textContent = `${this.currentIndex + 1} / ${this.cards.length}`;
        document.getElementById('flashcard').classList.remove('flipped');
        
        const easyCount = this.stats.easy.length;
        const diffCount = this.stats.difficult.length;
        document.getElementById('flashcards-stats').innerHTML = `
            <span class="stat-pill easy">Faciles: ${easyCount}</span>
            <span class="stat-pill difficult">Dificiles: ${diffCount}</span>
            <span class="stat-pill">Restantes: ${this.cards.length - easyCount - diffCount}</span>
        `;
    }
};

// ============================================================
// MODULO TEST
// ============================================================
const testModule = {
    mode: null,
    currentTheme: null,
    questions: [],
    currentIndex: 0,
    answers: {},
    timer: null,
    timeLeft: 0,
    startTime: null,
    reviewQuestions: JSON.parse(localStorage.getItem('reviewQuestions') || '[]'),
    history: JSON.parse(localStorage.getItem('testHistory') || '[]'),
    
    init() {
        this.renderStatsSummary();
    },
    renderStatsSummary() {
        const container = document.getElementById('test-stats-summary');
        if (this.history.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">Aun no has realizado ningun test.</p>';
            return;
        }
        const last = this.history[this.history.length - 1];
        container.innerHTML = `
            <p><strong>Ultimo test:</strong> ${last.score}/${last.total} (${last.percentage}%) - ${last.mode}</p>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Tests realizados: ${this.history.length}</p>
        `;
    },
    startExam() {
        this.mode = 'examen';
        this.currentTheme = null;
        const examQs = questionsData.filter(q => q.fuente === 'examen');
        this.questions = this.shuffleArray([...examQs]);
        this.currentIndex = 0;
        this.answers = {};
        this.timeLeft = 25 * 60;
        this.startTime = Date.now();
        this.startTimer();
        this.showGame();
        this.renderQuestion();
    },
    startThemeTest(themeId) {
        const themeNum = parseInt(themeId);
        if (![5, 6, 7, 8].includes(themeNum)) return;
        this.mode = 'tema' + themeNum;
        this.currentTheme = themeNum;
        const themeQs = questionsData.filter(q => q.tema === themeNum);
        this.questions = this.shuffleArray([...themeQs]).slice(0, Math.min(20, themeQs.length));
        this.currentIndex = 0;
        this.answers = {};
        this.startTime = Date.now();
        this.showGame();
        this.renderQuestion();
    },
    startPractice() {
        this.mode = 'practica';
        this.currentTheme = null;
        this.questions = this.shuffleArray([...questionsData]);
        this.currentIndex = 0;
        this.answers = {};
        this.startTime = Date.now();
        this.showGame();
        this.renderQuestion();
    },
    startReview() {
        const reviewIds = new Set(this.reviewQuestions);
        const reviewQs = questionsData.filter(q => reviewIds.has(q.id));
        if (reviewQs.length === 0) {
            alert('No tienes preguntas falladas para repasar. Haz un test primero.');
            return;
        }
        this.mode = 'repaso';
        this.questions = this.shuffleArray(reviewQs);
        this.currentIndex = 0;
        this.answers = {};
        this.startTime = Date.now();
        this.showGame();
        this.renderQuestion();
    },
    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            const mins = Math.floor(this.timeLeft / 60);
            const secs = this.timeLeft % 60;
            const el = document.getElementById('test-timer');
            if (el) el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.finishTest();
            }
        }, 1000);
    },
    showGame() {
        document.getElementById('test-menu').style.display = 'none';
        document.getElementById('test-game').style.display = 'block';
        document.getElementById('test-results').style.display = 'none';
    },
    showMenu() {
        clearInterval(this.timer);
        document.getElementById('test-menu').style.display = 'block';
        document.getElementById('test-game').style.display = 'none';
        document.getElementById('test-results').style.display = 'none';
        this.renderStatsSummary();
    },
    renderQuestion() {
        const q = this.questions[this.currentIndex];
        const total = this.questions.length;
        const progress = ((this.currentIndex + 1) / total) * 100;
        
        document.getElementById('test-progress').textContent = `${this.currentIndex + 1} / ${total}`;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        const answered = this.answers[this.currentIndex];
        const showFeedback = answered !== undefined;
        
        let optionsHtml = q.opciones.map((opt, i) => {
            let cls = 'option-btn';
            if (showFeedback) {
                if (i === q.correcta) cls += ' correct';
                else if (i === answered && i !== q.correcta) cls += ' incorrect';
            } else if (i === answered) {
                cls += ' selected';
            }
            return `<button class="${cls}" onclick="testModule.selectOption(${i})" ${showFeedback ? 'disabled' : ''}>
                <span class="option-label">${String.fromCharCode(97 + i)}.</span> ${opt}
            </button>`;
        }).join('');
        
        let feedbackHtml = '';
        if (showFeedback) {
            const isCorrect = answered === q.correcta;
            feedbackHtml = `
                <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="feedback-title">${isCorrect ? 'Correcto' : 'Incorrecto'}</div>
                    <div class="feedback-explanation">${q.explicacion}</div>
                </div>
            `;
        }
        
        document.getElementById('question-container').innerHTML = `
            <div class="question-theme-tag">Tema ${q.tema}</div>
            <div class="question-text">${q.pregunta}</div>
            <div class="options-list">${optionsHtml}</div>
            ${feedbackHtml}
        `;
        
        document.getElementById('btn-prev').style.display = this.currentIndex > 0 ? 'block' : 'none';
        document.getElementById('btn-next').textContent = this.currentIndex < total - 1 ? 'Siguiente ▶' : 'Finalizar ✓';
    },
    selectOption(index) {
        this.answers[this.currentIndex] = index;
        this.renderQuestion();
    },
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        } else {
            this.finishTest();
        }
    },
    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    },
    finishTest() {
        clearInterval(this.timer);
        let correct = 0;
        const wrongIds = [];
        this.questions.forEach((q, i) => {
            if (this.answers[i] === q.correcta) {
                correct++;
            } else {
                wrongIds.push(q.id);
            }
        });
        
        // Update review questions
        const reviewSet = new Set(this.reviewQuestions);
        wrongIds.forEach(id => reviewSet.add(id));
        // Remove from review if answered correctly in review mode
        if (this.mode === 'repaso') {
            this.questions.forEach((q, i) => {
                if (this.answers[i] === q.correcta) reviewSet.delete(q.id);
            });
        }
        this.reviewQuestions = Array.from(reviewSet);
        localStorage.setItem('reviewQuestions', JSON.stringify(this.reviewQuestions));
        
        // Save history
        const total = this.questions.length;
        const percentage = Math.round((correct / total) * 100);
        this.history.push({
            date: new Date().toISOString(),
            mode: this.mode,
            score: correct,
            total: total,
            percentage: percentage,
            time: Math.floor((Date.now() - this.startTime) / 1000)
        });
        localStorage.setItem('testHistory', JSON.stringify(this.history.slice(-20)));
        
        // Show results
        this.showResults(correct, total, percentage, wrongIds.length);
    },
    showResults(correct, total, percentage, wrong) {
        document.getElementById('test-game').style.display = 'none';
        document.getElementById('test-results').style.display = 'flex';
        
        let scoreClass = percentage >= 80 ? 'excellent' : percentage >= 50 ? 'good' : 'fail';
        let title = percentage >= 80 ? 'Excelente!' : percentage >= 50 ? 'Bien hecho!' : 'Sigue practicando';
        
        document.getElementById('results-title').textContent = title;
        document.getElementById('results-score').innerHTML = `<span class="${scoreClass}">${correct}/${total}</span>`;
        const modeLabel = this.mode === 'examen' ? 'Simulacro Examen Real' :
                           this.mode && this.mode.startsWith('tema') ? `Test Tema ${this.currentTheme}` :
                           this.mode === 'practica' ? 'Práctica' : 'Repaso';
        document.getElementById('results-details').innerHTML = `
            <p>Porcentaje: <strong>${percentage}%</strong></p>
            <p>Correctas: ${correct} | Incorrectas: ${wrong}</p>
            <p>Modo: ${modeLabel}</p>
        `;
    },
    restartSame() {
        this.currentIndex = 0;
        this.answers = {};
        if (this.mode === 'examen') {
            this.timeLeft = 25 * 60;
            this.startTimer();
        }
        this.showGame();
        this.renderQuestion();
    },
    newTest() {
        if (this.mode === 'examen') this.startExam();
        else if (this.mode === 'practica') this.startPractice();
        else if (this.mode && this.mode.startsWith('tema')) this.startThemeTest(this.currentTheme);
        else this.startReview();
    },
    backToMenu() {
        this.showMenu();
    },
    quit() {
        if (confirm('Seguro que quieres salir? Perderas tu progreso actual.')) {
            this.showMenu();
        }
    }
};

// ============================================================
// INICIALIZACION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    app.init();
    theoryModule.init();
    flashcardsModule.init();
    testModule.init();
});
