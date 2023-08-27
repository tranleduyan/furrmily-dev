/* Components */
import React from "react";

/* Stylings */
import "../../../Styles/Components/Cards/GeneralCard/GeneralCard.css";

function GeneralCard({ children, className='' }) {
  return (
    <>
      <div className={`${className} GeneralCard-container`}>{children}</div>
    </>
  );
}

export default GeneralCard;
