let currentRoll = 3
const rollWords = ["one", "two", "three", "four", "five", "six"]

function getRoll() {
    const newRoll = Math.floor(Math.random() * 6) + 1
    if (newRoll === currentRoll) {
        return getRoll()
    }

    currentRoll = newRoll
    return newRoll
}


let isAnimating = false
const button = document.querySelector(".button")
const para = document.querySelector("p")
const diceWrapper = document.querySelector(".dice-wrapper")

button.onclick = function rollDice() {
    if (isAnimating) {
        return
    }
    button.className = "is-active"
    button.innerHTML = "Rolling ."
    let rollRandom = Math.floor(Math.random() * 6) + 1
    let i = 0
    function transitionLoop() {

        isAnimating = true

        setTimeout(function () {
            button.innerHTML += " ."
            if (button.innerHTML === "Rolling . . . .") {
                button.innerHTML = "Rolling ."
            }

            i++
            diceWrapper.classList.add("centering")
            isAnimating = true

            setTimeout(function () {
                const roll = getRoll()
                const rollClassName = rollWords[roll - 1]
                diceWrapper.className = `dice-wrapper ${rollClassName}`

                setTimeout(function () {
                }, 200)

            }, currentRoll === 1 ? 0 : 200)

            if (i < rollRandom) {
                return transitionLoop()
            } else { isAnimating = false, setTimeout(function () { button.className = ""; button.innerHTML = "Click To Roll" }, 220) }
        }, 400)
    }
    transitionLoop()
}