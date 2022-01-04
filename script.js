//api = https://api.dictionaryapi.dev/api/v2/entries/ru/
const words = [
    {
        word: 'Оптовый',
        type: 'Им. Прил',
        definition: 'Относящийся к торговле оптом.',
        answers: [
            { text: 'оптОвый', correct: true},
            { text: 'оптовЫй', correct: false}
        ]
    },
    {
        word: 'Довезенный',
        type: 'Им. Прил',
        definition: 'Доставленный, завезенный, подброшенный, подкинутый, заброшенный, допоставленный, привезенный, подвезенный',
        answers: [
            { text: 'довезЁнный', correct: true},
            { text: 'дОвезённый', correct: false}
        ]
    },
    {
        word: 'Статуя',
        type: 'Им. Сущ.',
        definition: 'Скульптурное изображение человека или животного.',
        answers: [
            { text: 'стАтуя', correct: true},
            { text: 'статУя', correct: false}
        ]
    }
]

const word = document.querySelector('#word');
const part_of_speech = document.querySelector('#part_of_speech');
const description = document.querySelector('#description');
const answer_btn_1 = document.querySelector('#answer_btn_1');
const answer_btn_2 = document.querySelector('#answer_btn_2');
const answer_header = document.querySelector('#answer_header');

const startGame = () => {
    randomNum = Math.floor(Math.random()*words.length);
    selectedWord = words[randomNum];
    word.textContent = selectedWord.word;
    part_of_speech.textContent = selectedWord.type;
    description.textContent = selectedWord.definition;
    selectCorrectAnswer(
        answer_btn_1,
        answer_btn_2,
        selectedWord.answers[0],
        selectedWord.answers[1]
        );
}

const selectCorrectAnswer = (btn1, btn2, correctAns, incorrectAns) => {
    if(Math.floor(Math.random() * 2)){
        setAnswerToBtn(btn1, correctAns);
        setAnswerToBtn(btn2, incorrectAns);
    }
    else {
        setAnswerToBtn(btn1, incorrectAns);
        setAnswerToBtn(btn2, correctAns);
    }
}

const setAnswerToBtn = (btn, answer) => {
    btn.dataset.correct = answer.correct;
    btn.textContent = answer.text;
}

answer_btn_1.addEventListener('click', (e) =>{
    answer_header.innerText = "Answer 1";    
    console.log(e.target.dataset.correct);
})

answer_btn_2.addEventListener('click', (e) =>{
    answer_header.innerText = "Answer 2"; 
    console.log(e.target.dataset.correct);
})

startGame();
