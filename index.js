const questions = [
    {
        question : "What is the largest animal in the world?",
        answers : [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    }, 
    {
        question : "What is the smallest continent in the world?",
        answers : [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Africa", correct: false},
            {text: "Europe", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Pb", correct: false},
            {text: "Fe", correct: false}
        ]
    },    
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Mars", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Osmium", correct: false},
            {text: "Oganesson", correct: false}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Mark Twain", correct: false},
            {text: "Jane Austen", correct: false}
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Rome", correct: false},
            {text: "Paris", correct: true}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Mercury", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Claude Monet", correct: false}
        ]
    },
    {
        question: "Which ocean is the largest by surface area?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    }   
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answerButtons")
const nextButton = document.getElementById("nextbtn")
let currentIndex = 0
let score = 0
startQuiz()

function startQuiz(){
    currentIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentIndex]
    let questionNo = currentIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",  element => {
            const selectedBtn = element.target
            const isCorrect = selectedBtn.dataset.correct === "true"
            if(isCorrect){
                selectedBtn.classList.add("correct")
                score++
            }else{
                selectedBtn.classList.add("incorrect")
            }
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct == "true"){
                    button.classList.add("correct")

                }
                button.disabled = true
            })
            nextButton.style.display = "block"
        })
    })
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentIndex++
    if(currentIndex < questions.length){
        showQuestion()}
    else{
        showScore()
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})
