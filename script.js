const quizData = [
    {
        question: "直接材料費とは何を指しますか？",
        options: [
            "製品に直接関連する材料の費用",
            "工場の全般的な維持費",
            "間接的な材料費",
            "生産工程で生じた廃棄物の処理費用"
        ],
        answer: 0
    },
    {
        question: "加工費の内訳に含まれるものは？",
        options: [
            "直接材料費のみ",
            "直接労務費と製造間接費",
            "直接材料費と販売費",
            "材料費と販売管理費"
        ],
        answer: 1
    },
    {
        question: "仕掛品勘定は何を表しますか？",
        options: [
            "製品が完成した後の在庫",
            "製造途中の製品",
            "購入された未使用の原材料",
            "販売された商品の総費用"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    questionElement.textContent = questionData.question;
    answersElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selected) {
    const questionData = quizData[currentQuestion];
    const nextButton = document.getElementById("next-button");

    if (selected === questionData.answer) {
        score++;
        alert("正解です！");
    } else {
        alert("不正解です。");
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        nextButton.style.display = "block";
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");

    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";

    scoreElement.textContent = `あなたのスコアは ${score} / ${quizData.length} です。`;
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");

    quizContainer.style.display = "block";
    scoreContainer.style.display = "none";

    loadQuestion();
}

document.getElementById("next-button").onclick = loadQuestion;

startQuiz();