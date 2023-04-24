import React from "react";

/**
 * Renders the previous guesses. If props.guesses is empty, renders nothing.
 * @param {string[]} guesses collection of Guesses
 * @returns {JSX.Element | null}
 * @constructor
 */
function History({ guesses }) {

  if (!guesses.length) {
    return null;
  }

  return (
    <div className="guess-results">
      {guesses.map((guess, index ) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default History;
