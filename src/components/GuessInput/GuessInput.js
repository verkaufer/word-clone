import React from "react";
import { MAX_GUESS_LENGTH } from "../../constants";

const INPUT_VALIDATION_REGEX = `[a-zA-Z]{${MAX_GUESS_LENGTH}}`;

function GuessInput({ submitGuess }) {

  const [guess, setGuess] = React.useState("");

  /**
   * Validates and submits guess to submission callback prop.
   * @param e SubmitEvent
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length < 5) {
      window.alert("Please enter a 5-letter word. ")
      return;
    }
    submitGuess(guess);
    setGuess("");
  };

  /**
   * Processes user input to correct format before persisting to state.
   * @param e Input event
   */
  const handleInput = (e) => {
    const rawGuess = e.target.value;
    setGuess(rawGuess.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        title={"5-letter word"}
        pattern={INPUT_VALIDATION_REGEX}
        maxLength={5}
        value={guess}
        onChange={handleInput} />
    </form>
  );

}

export default GuessInput;
