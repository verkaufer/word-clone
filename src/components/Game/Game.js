import React from "react";

import GuessInput from "../GuessInput";
import History from "../History";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  const submitGuess = (newGuess) => {
    console.info({ guess: newGuess });
    setGuesses((guesses) => [newGuess, ...guesses]);
  };

  return (<>
    <History guesses={guesses} />
    <GuessInput submitGuess={submitGuess} />
  </>);
}

export default Game;
