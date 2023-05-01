import React from "react";

import GameOver from "../GameOver";
import GuessInput from "../GuessInput";
import History from "../History";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { guessedCorrectly } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(undefined);

  const submitGuess = (newGuess) => {
    console.info({ guess: newGuess });
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setGameOver(checkGameOver(newGuess, answer, newGuesses.length, NUM_OF_GUESSES_ALLOWED))
  };
  return (
    <>
      <History guesses={guesses} answer={answer} />
      {gameOver ? <GameOver gameResult={gameOver} /> : null}
      <GuessInput submitGuess={submitGuess} disabled={!!gameOver} />
    </>
  );
}

const checkGameOver = (guess, answer, attempts, maxAttempts) => {
  if (attempts >= maxAttempts) {
    return { type: "lose", context: { answer } };
  }
  if (guessedCorrectly(guess, answer)) {
    return { type: "win", context: { guesses: attempts } };
  }
  return undefined;
};

export default Game;
