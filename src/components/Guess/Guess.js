import React from "react";
import { range } from "../../utils";
import { MAX_GUESS_LENGTH } from "../../constants";

/**
 * Renders a guess as a row of boxes, each containing one character
 * @param {string} guess
 * @returns {*}
 * @constructor
 */
export function Guess({ guess }) {

  return (<p className="guess">
    {range(0, MAX_GUESS_LENGTH).map((idx) => (
      <span key={idx} className={"cell"}>
        {guess ? guess[idx] : ""}
      </span>
    ))}
  </p>);

}

export default Guess;