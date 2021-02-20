import React, { useRef, useState } from "react";
import { colorCodes } from "../../assets/data/color-codes/color-codes";
import ColorCard from "../color-card/color-card.component";

import "./color-cards.styles.scss";

// icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const ColorCards = (props) => {
  const [selectedColor, setSelectedColor] = useState("");

  const copyColorModal = useRef();
  const fontsCode = useRef();
  const backgroundCode = useRef();

  const copiedToast = useRef();

  const copySelectedColor = () => {
    const colors = selectedColor.split(":");

    const backgroundCodeSnippet = `
    background: linear-gradient(130deg, ${colors[0]}, ${colors[1]});
    `;

    const fontCodeSnippet = `
    background: -webkit-repeating-linear-gradient(110deg, ${colors[0]},${colors[1]});
    background-clip: text;
    -webkit-text-fill-color: transparent;    
    `;

    const isFontCode = fontsCode.current.style.display === "flex";

    const inp = document.createElement("input");
    inp.setAttribute(
      "value",
      isFontCode ? fontCodeSnippet : backgroundCodeSnippet
    );
    document.body.append(inp);
    inp.select();
    document.execCommand("copy");
    inp.parentNode.removeChild(inp);

    copiedToast.current.classList.add("show-toast");

    setTimeout(() => {
      copiedToast.current.classList.remove("show-toast");
    }, 600);
  };

  return (
    <div className="color-cards">
      <h1 className="heading">Gradient Colors</h1>

      <div className="previews">
        {colorCodes.map((colorCode) => (
          <ColorCard
            key={colorCode.colorId}
            {...colorCode}
            {...props}
            copyColorModal={copyColorModal}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>

      <div ref={copyColorModal} className="copy-color-modal">
        <div className="modal-header">
          <button
            className="back-btn"
            onClick={() => {
              props.history.push("/css-snippets/gradient-colors");

              copyColorModal.current.style.display = "none";
            }}
          >
            <KeyboardBackspaceIcon />
          </button>
          <h4>Copy Color</h4>
        </div>

        <div className="modal-main">
          <div className="modal-main-nav">
            <span
              className="active-nav"
              onClick={(e) => {
                fontsCode.current.style.display = "none";
                backgroundCode.current.style.display = "flex";

                e.currentTarget.nextSibling.className = "";
                e.target.className = "active-nav";
              }}
            >
              Background
            </span>
            <span
              onClick={(e) => {
                backgroundCode.current.style.display = "none";
                fontsCode.current.style.display = "flex";

                e.currentTarget.previousSibling.className = "";
                e.target.className = "active-nav";
              }}
            >
              fonts
            </span>
          </div>
          <div className="modal-main-content">
            <div ref={copiedToast} className="modal-copied-notification">
              Copied
            </div>

            <h2 className="heading">CSS Code Snippet</h2>
            <div ref={backgroundCode} className="modal-main-background">
              <p>{`background: linear-gradient(130deg, ${
                selectedColor.split(":")[0]
              }, ${selectedColor.split(":")[1]});`}</p>
            </div>
            <div
              ref={fontsCode}
              style={{ display: "none" }}
              className="modal-main-font"
            >
              <p>
                {`
               background: -webkit-repeating-linear-gradient(110deg, ${
                 selectedColor.split(":")[0]
               },
              ${selectedColor.split(":")[1]});
              `}
              </p>
              <p>{`background-clip: text;`}</p>
              <p> {`-webkit-text-fill-color: transparent;`}</p>
            </div>
          </div>
          <div className="modal-main-footer">
            <button onClick={copySelectedColor}>
              <FileCopyOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCards;
