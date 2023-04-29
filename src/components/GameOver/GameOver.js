import React from "react";

/**
 * The "win" scenario for the game
 * @typedef {{type: "win", context: { guesses: number}}} GameWon
 */

/**
 * The "lose" scenario for the game.
 * @typedef {{type: "lose", context: { answer: string }}} GameLost
 */

/**
 * The terminate game state once all guesses have been used up.
 * @typedef {GameWon | GameLost} GameOver
 */

/**
 * Renders the win or lose banner after the game is over.
 * @param gameResult {GameOver}
 * @return {JSX.Element}
 * @constructor
 */
function GameOver({gameResult}) {

    switch (gameResult.type) {
        case "win":
            return (<Win result={gameResult}/>)
        case "lose":
            return (<Lose result={gameResult}/>)
        default:
            throw new Error("Invalid game state");
    }

}

/**
 * Returns the "you won" banner.
 * @param result {GameWon}
 * @return {JSX.Element}
 * @constructor
 */
function Win({result}) {
    const {guesses} = result.context;
    return (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{guesses} guesses</strong>.
            </p>
        </div>
    );
}

/**
 * Returns the "you lost" banner with the correct answer.
 * @param result {GameLost}
 * @return {JSX.Element}
 * @constructor
 */
function Lose({result}) {
    const {answer} = result.context;
    return (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    );
}

export default GameOver;
