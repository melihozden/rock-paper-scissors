
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissor');

let userDecision = document.getElementById('userDecision')
let cpuDecision = document.getElementById('cpuDecision')
let status = document.getElementById('status');

let cpuScore = document.getElementById('cpuScore')
let userScore = document.getElementById('userScore')

let cpuScoreVal = parseInt(cpuScore.innerHTML)
let userScoreVal = parseInt(userScore.innerHTML)

let cpuDecisionVal;  // 1- Rock , 2-Paper , 3-Scissor

// // Objects 
// let rockObj = new Rock(1);
// let paperObj = new Paper(2);
// let scissorObj = new Scissor(3);

computerSelect = () => {
    return Math.floor((Math.random() * 3) + 1)
}


rockFunction = () => {
    cpuDecisionVal = Math.floor((Math.random() * 3) + 1)
    if (cpuDecisionVal == 1) {
        // draw
        console.log(`Draw! Rock: ${userScoreVal} Rock: ${cpuScoreVal}`)
        status.innerHTML = "Draw!"
    }
    else if (cpuDecisionVal == 2) {
        // Paper wins
        cpuScoreVal++;
        console.log(`Paper! Rock: ${userScoreVal} Paper: ${cpuScoreVal}`)
        status.innerHTML = "Computer Wins!"

    }
    else {
        // Rock wins
        userScoreVal++
        console.log(`Rock! Rock: ${userScoreVal} Scissor: ${cpuScoreVal}`)
        status.innerHTML = "User Wins!"

    }
}
paperFunction = () => {
    cpuDecisionVal = computerSelect()
    if (cpuDecisionVal == 1) {  // pc --> rock
        // Paper Wins
        userScoreVal++
        console.log(`Paper! Paper: ${userScoreVal} Rock: ${cpuScoreVal}`)
        status.innerHTML = "User Wins!"
    }
    else if (cpuDecisionVal == 2) { // pc --> paper
        // Draw
        console.log(`Draw! Paper: ${userScoreVal} Paper: ${cpuScoreVal}`)
        status.innerHTML = "Draw!"

    }
    else {  // pc --> scissor
        // Scissor wins
        cpuScoreVal++
        console.log(`Scissor! Paper: ${userScoreVal} Scissor: ${cpuScoreVal}`)
        status.innerHTML = "Computer Wins!"

    }

}
scissorFunction = () => {
    cpuDecisionVal = computerSelect()
    if (cpuDecisionVal == 1) { // pc --> rock
        // Rock Wins
        cpuScoreVal++
        console.log(`Rock! Scissor: ${userScoreVal} Rock: ${cpuScoreVal}`)
        status.innerHTML = "Computer Wins!"
    }
    else if (cpuDecisionVal == 2) {
        // Scissor wins
        userScoreVal++;
        console.log(`Paper! Scissor: ${userScoreVal} Paper: ${cpuScoreVal}`)
        status.innerHTML = "User Wins!"

    }
    else {
        // Draw
        console.log(`Draw! Scissor: ${userScoreVal} Scissor: ${cpuScoreVal}`)
        status.innerHTML = "Draw!"

    }

}

buttonClicked = (x) => {
    if (x == 1) {
        rockFunction()
        console.log(`Rock: ${cpuScoreVal}`)
        cpuScore.innerHTML = cpuScoreVal.toString()
        userScore.innerHTML = userScoreVal.toString()
    }
    else if (x == 2) {
        paperFunction()
        console.log(`Paper: ${cpuScoreVal}`)
        cpuScore.innerHTML = cpuScoreVal.toString()
        userScore.innerHTML = userScoreVal.toString()
    }
    else {
        scissorFunction()
        console.log(`Scissor: ${cpuScoreVal}`)
        cpuScore.innerHTML = cpuScoreVal.toString()
        userScore.innerHTML = userScoreVal.toString()
    }


}