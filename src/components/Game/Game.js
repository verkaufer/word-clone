import React from 'react';

import GuessInput from "../GuessInput";
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const submitGuess = (guess) => {
    console.info({guess});
  }

  return <GuessInput submitGuess={submitGuess}/>;
}

export default Game;
