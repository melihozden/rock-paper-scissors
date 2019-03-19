class Rock {

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
}