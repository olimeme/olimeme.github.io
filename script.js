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
    },
    {
        word: 'Досуха',
        type: 'Нареч.',
        definition: 'До полной сухости.',
        answers: [{
                text: 'дОсуха',
                correct: true
            },
            {
                text: 'досухА',
                correct: false
            }
        ]
    },
    {
        word: 'Еретик',
        type: 'Им. Сущ.',
        definition: 'Последователь ереси.',
        answers: [{
                text: 'еретИк',
                correct: true
            },
            {
                text: 'ерЕтик',
                correct: false
            }
        ]
    },
    {
        word: 'Взялась',
        type: 'Глаг.',
        definition: 'Схватиться за что-л. рукой, руками.',
        answers: [{
                text: 'взялАсь',
                correct: true
            },
            {
                text: 'взЯлась',
                correct: false
            }
        ]
    },
    {
        word: 'Новости',
        type: 'Им. Сущ.',
        definition: 'Оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент.',
        answers: [{
                text: 'нОвости',
                correct: true
            },
            {
                text: 'новостИ',
                correct: false
            }
        ]
    },
    {
        word: 'Гнала',
        type: 'Глаг.',
        definition: 'Кого-что заставлять двигаться, перемещаться куда-либо',
        answers: [{
                text: 'гналА',
                correct: true
            },
            {
                text: 'гнАла',
                correct: false
            }
        ]
    },
    {
        word: 'Обнялась',
        type: 'Глаг.',
        definition: 'Обнимать',
        answers: [{
                text: 'обнялАсь',
                correct: true
            },
            {
                text: 'обнЯлась',
                correct: false
            }
        ]
    },
    {
        word: 'Дозвонится',
        type: 'Глаг.',
        definition: 'Звоня, получить ответ.',
        answers: [{
                text: 'дозвонИтся',
                correct: true
            },
            {
                text: 'дозвОнится',
                correct: false
            }
        ]
    },
    {
        word: 'Назвалась',
        type: 'Глаг.',
        definition: 'Сообщить свое имя, фамилию, звание, положение и т. п.',
        answers: [{
                text: 'назвалАсь',
                correct: true
            },
            {
                text: 'назвАлась',
                correct: false
            }
        ]
    },
    {
        word: 'Отключенный',
        type: 'Им. Прил.',
        definition: '',
        answers: [{
                text: 'отключЁнный',
                correct: true
            },
            {
                text: 'отклЮченный',
                correct: false
            }
        ]
    },
    {
        word: 'Прожорлива',
        type: 'Им. Прил.',
        definition: 'Такой, который много ест, жаден к еде; ненасытный.',
        answers: [{
                text: 'прожОрлива',
                correct: true
            },
            {
                text: 'прОжорлива',
                correct: false
            }
        ]
    },
    {
        word: 'Иксы',
        type: 'Им. Сущ.',
        definition: 'Фальсифицированная, контрафактная продукция.',
        answers: [{
                text: 'Иксы',
                correct: true
            },
            {
                text: 'иксЫ',
                correct: false
            }
        ]
    },
    {
        word: 'Приняли',
        type: 'Глаг.',
        definition: 'Согласиться сделать что-то своим, включить что-то в сферу своего владения, влияния, понимания.',
        answers: [{
                text: 'прИняли',
                correct: true
            },
            {
                text: 'принЯли',
                correct: false
            }
        ]
    },
    {
        word: 'Загодя',
        type: 'Нареч.',
        definition: 'Разг. заранее, заблаговременно',
        answers: [{
                text: 'зАгодя',
                correct: true
            },
            {
                text: 'загодЯ',
                correct: false
            }
        ]
    },
    {
        word: 'Затемно',
        type: 'Нареч.',
        definition: 'До рассвета, пока еще темно.',
        answers: [{
                text: 'зАтемно',
                correct: true
            },
            {
                text: 'затемнО',
                correct: false
            }
        ]
    },
    {
        word: 'Отрочество',
        type: 'Им. Сущ.',
        definition: 'Период жизни человека между детством и юностью.',
        answers: [{
                text: 'Отрочество',
                correct: true
            },
            {
                text: 'отрОчество',
                correct: false
            }
        ]
    },
]

const word = document.querySelector('#word');
const save_btn = document.querySelector('#save_btn');
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
    desc.textContent = `${initialWord} произноситься как ${correctWord}.`;

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
});

btn_next.addEventListener('click',startGame);

save_btn.addEventListener('click',()=>{
    console.log('hello');
});

startGame();