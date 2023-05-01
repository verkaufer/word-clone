import React from "react";

/**
 * Renders a banner element.
 * @param variant {string} Affects which variant of the banner to render
 * @param children {JSX.Element[]}
 * @return {JSX.Element}
 * @constructor
 */
function Banner({variant, children}) {

    return (
      <div className={variant ? `${variant} banner` : "banner"}>
          {children}
      </div>
  );
}

export default Banner;
