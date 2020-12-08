
const questionArray = ["Which of the following is a markup language?", "What does CSS stand for?",
    "Which date is considered the birthday of the internet?", "Who developed Javascript?", "Who wrote the first version of HTML?",
    "When was Google founded?", "What is known as the worlds first Website?", "What is the primary language used in development of Microsoft Software", "Who developed CSS?", "Where was Amazon founded?"]

const answerArray = [["HTML", "Java", "Python", "Javascript"], ["Cascading Style Sheet", "Cars Ships Sofa", "Cake Sip Sort", "Carol Sarah Sink"],
["January 1st 1900", "January 1st 1983", "January 1st 2005", "July 8th 1973"], ["Bill Gates", "Linda Shoreman", "Brendan Eich", "Steve Jobs"], ["Tim Berners-Lee", "Josh Williams", "Juan Garcia", "Craig Jordan"],
["October 6th 1983", "September 4th 1998", "March 9th 1776", "May 17th 1990"], ["myspace.com", "google.com", "yahoo.com", "info.cern.ch"], ["A", "B++", "Ram", "C"],
["Glenn Phillips", "Tim Berners-Lee", "Will Berg", "Håkon Wium Lie"], ["Seattle", "Houston", "Redmond", "Bellevue"],]




const correctAnswer = [0, 0, 1, 2, 0, 1, 3, 3, 3, 3]

const first = document.getElementById("buttonOne")
const second = document.getElementById("buttonTwo")
const third = document.getElementById("buttonThree")
const fourth = document.getElementById("buttonFour")
let gameTime = document.getElementById("timer")
let showUser = document.getElementById("userresult")

let counter = 0
let correctCounter = 0
let timer = 120
let timerId;



var stoppedTimer = function () {
    var score = timer + 10
    clearInterval(timer)
    console.log(score)
    endQuiz(score)
}

function endQuiz(score) {

    localStorage.setItem("Score", score)
}

// function endQuizName(){

//     localStorage.setItem("Score", score)
// }


function startTimer() {
    timer--
    gameTime.textContent = timer
}

function correct() {
    showUser.innerHTML = "Correct!"
}

function incorrect() {
    showUser.innerHTML = "Incorrect"
}




function stopQuiz() {

    document.getElementById("answerSpace").setAttribute("class", "hide");
    stoppedTimer();


}

function createHighScoreEl() {

    const createDivMain = document.createElement("divMain")
    createDivMain.setAttribute("id", "containerMain")
    document.body.appendChild(createDivMain)

    const createDivOne = document.createElement("div")
    createDivOne.setAttribute("id", "containerOne")
    document.body.appendChild(createDivOne)


    const createDivTwo = document.createElement("divtwo")
    createDivTwo.setAttribute("id", "containerTwo")
    document.body.appendChild(createDivTwo)



    const name = document.createElement("input")
    name.setAttribute("id", "name");
    name.setAttribute("value","")
    document.body.appendChild(name);

    const btn = document.createElement("button")
    btn.setAttribute("id", "submit");
    document.body.appendChild(btn);


    // containerTwo.appendChild(highScore)
    // containerOne.appendChild(name)
    containerMain.appendChild(createDivOne)
    containerMain.appendChild(createDivTwo)


    document.getElementById("containerTwo").innerHTML = "Name:"
    document.getElementById("submit").innerHTML = "Submit"

    


    // function endQuizName() {
    //     console.log(document.getElementById("name"))
    //     let getName = document.getElementById("name").val()
    //     localStorage.setItem("Name", getName)
    // }

    // document.getElementById("submit").addEventListener("click", endQuizName());

}


function add() {
    counter++;


    if (counter < 10) {
        generator()
    }


    console.log(counter)
    console.log(typeof counter)

}

function generator() {
    document.getElementById("questionspace").textContent = questionArray[counter]
    first.innerHTML = answerArray[counter][0]
    second.innerHTML = answerArray[counter][1]
    third.innerHTML = answerArray[counter][2]
    fourth.innerHTML = answerArray[counter][3]

}
document.getElementById("start").addEventListener("click", function () {
    generator()
    timerId = setInterval(startTimer, 1000)
})


// document.getElementById("submit").addEventListener("click", function (event) {

// })


document.getElementById("answerSpace").addEventListener("click", function (event) {
    var buttonValue = event.target.getAttribute("data-value")
    correctChoice(buttonValue)
    if (counter >= 9) {
        stopQuiz()
        clearInterval(timerId)
        createHighScoreEl()
        // createHighScoreEl()
        console.log(timerId)
    }
    add()
})


function correctChoice(buttonValue) {
    if (buttonValue == correctAnswer[counter]) {
        correct()


    } else {
        incorrect();
        timer -= 10;




    }
}







