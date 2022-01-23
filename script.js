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
const btn_block = document.querySelector('#btn_block');
const btn_next = document.querySelector('#btn_next');
let selectedWord;

const startGame = () => {
    if(!answer_section.classList.contains('hidden')){
        clearAnswerSection();
        answer_section.classList.add('hidden');
    }
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

const clearAnswerSection = () =>{
    answer_section.removeChild(answer_section.firstChild.nextSibling); //removes correct/incorrect section
    answer_section.removeChild(answer_section.firstChild.nextSibling); //removes description section
}

const setAnswerToBtn = (btn, answer) => {
    btn.dataset.correct = answer.correct;   //adds correct answer boolean value into the dataset of a button
    btn.textContent = answer.text;  //adds the answer text to a button
}

const parseBool = (str) => {    //parses the string value retrived from dataset to boolean value 
    return (str === 'true')     
}

const selectCorrectAnswer = (btn1, btn2, correctAns, incorrectAns) => { //randomly assigns correct value to one of the answer buttons
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

const revealBtnBlock = () => {
    if(btn_block.classList.contains('hidden')){
        btn_block.classList.remove('hidden')
        btn_block.classList.add('transition')
    }
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

const createAnswerBlock = (correctBlock,descriptionBlock,answerSection) => {
    answerSection.insertBefore(descriptionBlock,btn_block);
    answerSection.insertBefore(correctBlock, descriptionBlock)
    answerSection.classList.remove('hidden')
} 

const addAnswerBlock = (datasetCorrect) => { //adds answer block into answer section  
    if(!answer_section.classList.contains('hidden'))
            return
        
        const isCorrect = parseBool(datasetCorrect)
        const correctBlock = isCorrect ? createCorrectBlock('correct') : createCorrectBlock('incorrect');
        const initialWord = selectedWord.word;
        const correctWord = selectedWord.answers[0].text;
        const descriptionBlock = createDescriptionBlock(initialWord,correctWord);
        
        createAnswerBlock(correctBlock,descriptionBlock,answer_section);
        revealBtnBlock();
}

[answer_btn_1,answer_btn_2].forEach(btn => {
    btn.addEventListener('click', (e) => addAnswerBlock(e.target.dataset.correct));
})

btn_next.addEventListener('click',startGame);

startGame();
