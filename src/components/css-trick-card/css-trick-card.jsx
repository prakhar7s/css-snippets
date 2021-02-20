import React, { useState } from "react";

import "./css-trick-card.scss";

// ICONS
import Brightness6Icon from "@material-ui/icons/Brightness6";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const CSSTrickCard = (props) => {
  const { title, code } = props.cssTrick;
  const { setShowCopied, showCopied } = props;

  const handleCopyBtn = () => {
    if (showCopied === true) {
      setShowCopied(false);
      setTimeout(() => {
        setShowCopied(true);
      }, 200);
    } else {
      setShowCopied(true);
    }

    //COPY Logic
    const inp = document.createElement("textarea");
    document.body.appendChild(inp);
    code.map((line) => (inp.value += line + "\n"));

    inp.select();
    document.execCommand("copy");
    inp.parentNode.removeChild(inp);

    setTimeout(() => {
      setShowCopied(false);
    }, 8000);
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="css-trick-card">
      <div className="trick-title">{title}</div>
      <div className={`code-container${darkMode ? " dark-mode" : ""}`}>
        <div className={`code`}>
          {code.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="btns">
          <div
            onClick={() => setDarkMode(darkMode ? false : true)}
            className="mode-btn"
          >
            <Brightness6Icon />
          </div>
          <div onClick={() => handleCopyBtn()} className="copy-btn">
            <FileCopyOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSTrickCard;
