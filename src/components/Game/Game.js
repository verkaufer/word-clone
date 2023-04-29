import React from "react";

import GameOver from "../GameOver";
import GuessInput from "../GuessInput";
import History from "../History";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { guessedCorrectly } from "../../game-helpers";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(undefined);
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    // logging answer for debugging; no peeking ;)
    console.log({ answer });
    return answer;
  });

  const submitGuess = (newGuess) => {
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setGameOver(
      checkGameOver(newGuess, answer, newGuesses.length, NUM_OF_GUESSES_ALLOWED)
    );
  };

  const resetGame = () => {
    setGameOver(undefined);
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <History guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} disabled={!!gameOver} />
      {gameOver ? <GameOver gameResult={gameOver} handleReset={resetGame} /> : null}
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
