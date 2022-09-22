function guessingGame(guess) {
    let target = Math.floor(Math.random() * 100)
    let count = 0
    return function compare(guess) {
        if (guess === target) {
            count++
            let final = target
            target = undefined
            return `You win! You found ${final} in ${count} guesses.`
        } else if (guess < target) {
            count++
            return `${guess} is too low!`
        } else if (guess > target) {
            count++
            return `${guess} is too high!`
        } else {
            return "The game is over, you already won!"
        }
    }
}

module.exports = { guessingGame };
