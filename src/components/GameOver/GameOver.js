import React from "react";
import Banner from "../Banner";

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
 * @param handleReset {() => void} callback to reset the game state
 * @return {JSX.Element}
 * @constructor
 */
function GameOver({gameResult, handleReset}) {

    const bannerProps = {
        action: handleReset,
        actionButtonText: "Play again"
    }

    switch (gameResult.type) {
        case "win":
            return (<Win result={gameResult} {...bannerProps}/>)
        case "lose":
            return (<Lose result={gameResult} {...bannerProps} />)
        default:
            throw new Error("Invalid game state");
    }
}

/**
 * Returns the "you won" banner.
 * @param result {GameWon}
 * @param props {Object} Optional <Banner> props to control resetting the game state
 * @return {JSX.Element}
 * @constructor
 */
function Win({result, ...props}) {
    const {guesses} = result.context;
    return (
        <Banner variant={"happy"} action={props.action} actionButtonText={props.actionButtonText}>
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{guesses} guesses</strong>.
            </p>
        </Banner>
    );
}

/**
 * Returns the "you lost" banner with the correct answer.
 * @param result {GameLost}
 * @param props Optional <Banner> props to control resetting the game state
 * @return {JSX.Element}
 * @constructor
 */
function Lose({result, ...props}) {
    const {answer} = result.context;
    return (
        <Banner variant={"sad"} action={props.action} actionButtonText={props.actionButtonText}>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </Banner>
    );
}

export default GameOver;
