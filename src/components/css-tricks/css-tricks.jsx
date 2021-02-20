import React, { useState } from "react";
import CSSTricksList from "../../assets/data/css-tricks/css-tricks";
import CSSTrickCard from "../css-trick-card/css-trick-card";

import "./css-tricks.scss";

//ICONS
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const CSSTricks = () => {
  const [showCopied, setShowCopied] = useState(false);
  return (
    <div className="css-tricks">
      <h1>In this section, we will going to see some cool CSS tricks,</h1>
      {CSSTricksList.map((cssTrick) => (
        <CSSTrickCard
          key={cssTrick.CSSTrickID}
          setShowCopied={setShowCopied}
          showCopied={showCopied}
          cssTrick={cssTrick}
        />
      ))}
      {showCopied ? (
        <div className="copied-msg">
          <span>CSS Code Copied to clipboard!</span>
          <div
            onClick={() => setShowCopied(false)}
            className="close-copied-msg"
          >
            <CloseOutlinedIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CSSTricks;
