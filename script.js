const restartBtn = document.getElementById('restart');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user_score');
const questionText = document.getElementById('question_text');
const imageArea = document.getElementById('image_area');
const finalScore = document.getElementById('final_score');


let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "What is the name of this character?",
        image: src="https://i.pinimg.com/originals/9f/e6/7b/9fe67b3255a29922aea2cbc95bf759b2.jpg",
        answers: [
            {option: "Mickey", answer: true},
            {option: "Pluto", answer: false}
            // {option: "Batman", answer: false}, 

        ]
    },
    {
        question: "What is the name of this movie?",
        image: src="https://static01.nyt.com/images/2015/06/18/multimedia/movies-insideout-061915/movies-insideout-061915-square640.jpg",
        answers: [
            {option: "Frozen", answer: false},
            {option: "Inside-Out", answer: true}
            // {option: "Bolt", answer: false},

        ]
    },
    {
        question: "What is the name of this weapon?",
        image: src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T1599A1PA5076PT10X12Y12D159351987W4290H4290/views/1,width=378,height=378,appearanceId=1,backgroundColor=FFFFFF,noPt=true/maori-fish-hook-hei-matau-tribal-tattoo-paua.jpg",
        answers: [
            {option: "Fish-hook", answer: true},
            {option: "Sword", answer: false}
            // {option: "Sniper", answer: false},

        ]
    }
]

restartBtn.addEventListener('click',restart);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);
trueBtn.addEventListener('click', onTrue);
falseBtn.addEventListener('click', onFalse);

function onTrue(){
    console.log('True select');
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<3){
           score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<=2){
        next();
    }
}

function onFalse(){
    let ano =1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<3){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<= 2){
        next();
    }
}


function beginQuiz(){
    console.log('Quiz Started');
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    imageArea.src = questions[currentQuestion].image;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    
    
}

beginQuiz();

function restart(){
    currentQuestion = 0;
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    imageArea.classList.remove('hide');
    finalScore.classList.add('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();

}

function next(){
    currentQuestion++;
    console.log(currentQuestion);
    if(currentQuestion > 2){
        submit();
    } else{
        if(currentQuestion>=2){
            nextBtn.classList.add('hide');
        }
    
    questionText.innerHTML= questions[currentQuestion].question;
    imageArea.src=questions[currentQuestion].image;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    }
}

function submit(){
    console.log('Submittede')
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    imageArea.classList.add('hide');
    finalScore.classList.remove('hide');
    questionText.innerHTML = "Congratulations on submitting the quiz!!";
    finalScore.innerHTML = `Your score is ${score}`;
}