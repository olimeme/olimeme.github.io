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
const answer_section = document.querySelector('#answer_section');
const answer_section_correct = document.querySelector('#correct');
const answer_section_incorrect = document.querySelector('#incorrect');
let selectedWord;

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

const setAnswerToBtn = (btn, answer) => {
    btn.dataset.correct = answer.correct;
    btn.textContent = answer.text;
}

const parseBool = (str) => {
    return (str === 'true')
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

const createDescriptionBlock = (initialWord, correctWord) => {
    const desc = document.createElement('p');
    desc.textContent = `${initialWord} пишется через ${correctWord}`;

    const descBlock = document.createElement('div');
    descBlock.classList.add('answer_section_desc','transition');

    descBlock.appendChild(desc);
    return descBlock;
}

const createBtnBlock = () => {
    const btnBlock = document.createElement('div');
    btnBlock.classList.add('btn_block', 'transition');
    btnBlock.innerHTML = `
        <button class="btn">Далее <i class="fas fa-chevron-right"></i></button>
    `;
    return btnBlock;
}

const createCorrectBlock = (isCorrect) => {
    const contentBlock = document.createElement('div');
    contentBlock.classList.add(`${isCorrect}_content`);

    const header = document.createElement('h1');
    const img = document.createElement('img');
    header.innerText = isCorrect === 'correct' ? 'Правильно!' : 'Неправильно!'
    img.src = `img/icons/${isCorrect}.png`;
    
    contentBlock.appendChild(img);
    contentBlock.appendChild(header);
    
    const answerBlock = document.createElement('div');
    answerBlock.classList.add(isCorrect,'transition');

    answerBlock.appendChild(contentBlock);

    return answerBlock;
}

const createAnswerBlock = (correctBlock,descriptionBlock,btnBlock,answerSection) => {
    answerSection.appendChild(correctBlock);
    answerSection.appendChild(descriptionBlock);
    answerSection.appendChild(btnBlock);
    answerSection.classList.remove('hidden')
} 

const addAnswerBlock = (datasetCorrect) => {
    if(!answer_section.classList.contains('hidden'))
            return
        
        const isCorrect = parseBool(datasetCorrect)
        const correctBlock = isCorrect ? createCorrectBlock('correct') : createCorrectBlock('incorrect');
        const initialWord = selectedWord.word;
        const correctWord = selectedWord.answers[0].text;
        const descriptionBlock = createDescriptionBlock(initialWord,correctWord);
        const btnBlock = createBtnBlock();
        
        createAnswerBlock(correctBlock,descriptionBlock,btnBlock,answer_section);
}

[answer_btn_1,answer_btn_2].forEach(btn => {
    btn.addEventListener('click', (e) => addAnswerBlock(e.target.dataset.correct));
})

startGame();
