import React from "react";

/**
 * Renders a banner element.
 * @param variant {string} Affects which variant of the banner to render
 * @param action {(() => void)|undefined} Callback to execute when user clicks on the action button. If undefined, no button is rendered.
 * @param actionButtonText {string} Button text rendered if actionButton is defined
 * @param children {JSX.Element[]}
 * @return {JSX.Element}
 * @constructor
 */
function Banner({variant, action, actionButtonText, children}) {

    return (
      <div className={variant ? `${variant} banner` : "banner"}>
          {children}
          {action && <button onClick={action}>{actionButtonText}</button> }
      </div>
  );
}

export default Banner;
