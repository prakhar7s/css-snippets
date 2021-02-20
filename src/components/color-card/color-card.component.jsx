import React, { useRef } from "react";

import "./color-card.styles.scss";

const ColorCard = ({
  colorId,
  colorOne,
  colorTwo,
  history,
  copyColorModal,
  setSelectedColor,
}) => {
  const colorCardRef = useRef();

  return (
    <div ref={colorCardRef} className="color-card">
      <div
        className="color-preview"
        style={{
          background: `linear-gradient(40deg, ${colorOne}, ${colorTwo})`,
        }}
      ></div>
      <div className="lower">
        <div className="colors">
          <h4>{colorOne} </h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>_</span>
          <h4>{colorTwo}</h4>
        </div>
        <button
          className="copy-btn"
          onClick={() => {
            history.push(`/css-snippets/gradient-colors/${colorId}`);
            copyColorModal.current.style.display = "flex";

            setSelectedColor(`${colorOne}:${colorTwo}`);
          }}
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default ColorCard;
