/* Components */
import React from "react";

/* Stylings */
import "../../../Styles/Components/Cards/GeneralCard/GeneralCard.css";

function GeneralCard({ children }) {
  return (
    <>
      <div className="GeneralCard-container">{children}</div>
    </>
  );
}

export default GeneralCard;
