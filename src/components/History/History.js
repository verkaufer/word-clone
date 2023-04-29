import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { Guess } from "../Guess";

/**
 * Renders the previous guesses.
 * @param {string[]} guesses collection of Guesses
 * @returns {JSX.Element | null}
 * @constructor
 */
function History({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, idx) => {
        return <Guess guess={guesses[idx]} key={idx} />;
      })}
    </div>
  );
}

export default History;
