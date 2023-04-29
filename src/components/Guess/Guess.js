import React from "react";
import { range } from "../../utils";
import { MAX_GUESS_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

/**
 * Renders a guess as a row of boxes, each containing one character
 * @param {string} guess the user's guess
 * @param {string} answer the correct answer
 * @returns {JSX.Element}
 * @constructor
 */
export function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, MAX_GUESS_LENGTH).map((idx) => {
        return <Cell key={idx} guessResult={guessResult ? guessResult[idx] : {}} />;
      })}
    </p>
  );

}

/**
 * A Guess's letter and its correctness result
 * @param { {letter: string, status: string}  } guessResult The letter and its correctness-state
 * @returns {JSX.Element}
 * @constructor
 */
function Cell({ guessResult }) {
  const { letter, status } = guessResult || {};
  const className = status ? `cell ${status}` : `cell`;
  return (
    <span className={className}>
      {letter}
    </span>
  );
}

export default Guess;