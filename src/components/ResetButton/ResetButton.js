import React from "react";

function ResetButton({handleReset}) {
    return <button className={"reset-game"} onClick={handleReset}>Reset Game</button>
}

export default ResetButton;
