console.log("hello");

const quizDb = [

    {
        question: "What is full form of HTML?",
        a: "Hello to my land",
        b: "Hyper text markup language",
        c: "Hey text markup language",
        d: "Hello text markup language",
        ans: "ans2"

    },
    {
        question: "What is full form of CSS?",
        a: "Correct sign sheet",
        b: "Cascating style sheet",
        c: "cascating super sheet",
        d: "Car style sheet",
        ans: "ans2"

    },
    {
        question: "What is full form of HTTP?",
        a: "Hyper text transfer protocol",
        b: "Hyper text transpor protocol",
        c: "Highly teach tree programme",
        d: "High text transport protocol",
        ans: "ans1"

    },
    {
        question: "What is full form of JS?",
        a: "Jetrofa Land",
        b: "Java Script",
        c: "Java Scroll",
        d: "jerry Sheel",
        ans: "ans2"

    },
    {
        question: "What is full form of ROM?",
        a: "Read Ony Memory",
        b: "Run Only Memory",
        c: "Research Only Memory",
        d: "Red Only Menory",
        ans: "ans1"

    },
    {
        question: "What is full form of RAM?",
        a: "Random Access Memory",
        b: "Render Access Memory",
        c: "Read Access Memory",
        d: "Real Access Memory",
        ans: "ans1"

    },
   
    {
        question: "What is full form of ALU?",
        a: "Arethmetic Logic Unit",
        b: "Arrow Logi Unit",
        c: "Arethmetic legeal Units",
        d: "arrow legeal Unit",
        ans: "ans1"

    },
    {
        question: "What is full form of CPU?",
        a: "Central Power Unit",
        b: "Central Proccesing Unit",
        c: "Cercular Power Unit ",
        d: "Certified Power Unit",
        ans: "ans2"

    },
    {
        question: "What is a computer?",
        a: "Mechanical Device",
        b: "Electronics Device",
        c: "A Calculator",
        d: "A Telephone",
        ans: "ans2"

    },
    {
        question: "What type of device of keyboard?",
        a: "Output Device",
        b: "Input Device",
        c: "Input-Output Device",
        d: "None of This",
        ans: "ans2"

    },
    
   
    
]

const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('.submit');
const skip = document.querySelector('.skip');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore');

const maincontainer = document.querySelector('#maincontainer')

const startGame = document.querySelector('.startGame');




const BTN = document.querySelectorAll('#BTN');
const show = document.querySelector('.showscreen')

let questionCount = 0;
let score = 0;


// BTN.addEventListener('click',()=>{

// const loadQuestion = loadQuestion();

// console.log('the button is pressed');


// })
    
//function to start the game by hide the starting page
function start(){
    

    maincontainer.classList.remove('showscreen'); 
    // console.log("button pressed");
    startGame.style.display = "none";

      
   
}

// start()

// if(start){
//     startGame.style.display = "none";
// }




//function to  load questions from quizDb to html element
const loadQuestion = ()=>{
    const questionList = quizDb[questionCount];
    question.innerText = questionList.question;


    opt1.innerText = questionList.a;
    opt2.innerText = questionList.b;
    opt3.innerText = questionList.c;
    opt4.innerText = questionList.d;
    

}
//calling the function
loadQuestion();

//function to check the answer is correct or not
const getcheckAnswer = ()=>{
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id;

        }
    });

return answer;

};

//function to disselect an answer
const diselect = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}


//check if the answer is correct or not and increase the score
submit.addEventListener('click',()=>{
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);


if(checkedAnswer==quizDb[questionCount].ans){
    score++;
};

questionCount++;
diselect();


//when question list is end show the score 
if(questionCount<quizDb.length){
    loadQuestion();
}
else{
    showScore.innerHTML= `
    <h3>Your Score ${score}/${quizDb.length} </h3>  
    <button class="btn" onClick="location.reload()"> Play Again </button>
    `;
showScore.classList.remove('ScoreArea'); 
}

})

// //function to skip questions
// skip.addEventListener('click',()=>{
//     if(questionCount<quizDb.length){
//         loadQuestion();
//     }
//     console.log("question  skipped");

// })