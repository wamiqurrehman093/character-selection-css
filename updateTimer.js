var timer = setInterval(updateTimer, 1000)
var timerValue = document.getElementsByClassName("timer-value")[0]

function updateTimer(){
    timerValue.innerHTML = parseInt(timerValue.innerHTML) - 1
    if (timerValue.innerHTML === "0") {
        autoSelectCharacters("p1")
        autoSelectCharacters("p2")
        clearInterval(timer)
    }
}

async function autoSelectCharacters(player) {
    while (data[player].selectedCharacters.length < 4) {
        selectCharacter(player)
        await sleep(250)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}