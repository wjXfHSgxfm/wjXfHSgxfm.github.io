let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.round(Math.random()*9);
}

const getAbsoluteDistance = (numberOne, numberTwo) => {
    return Math.abs(numberOne - numberTwo);
}

const compareGuesses = (humanGuess, cpuGuess, targetNumber) => {
    const humanToTarget = getAbsoluteDistance(targetNumber, humanGuess);
    const cpuToTarget = getAbsoluteDistance(targetNumber, cpuGuess); 

    if (humanToTarget<cpuToTarget) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human'){
        return humanScore++;
    } else if (winner === 'computer') {
        return computerScore++;
    }
}

const advanceRound = () => {
    return currentRoundNumber++;
}

// Testing

console.log(generateTarget());
console.log(compareGuesses(2,7,5));