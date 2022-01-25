import { useState } from "react";

// Styled
import { ControlsStyled, RowStyled } from "./styled";

// Components
import Widget from "../";

//
import { Subtract, Add, DownAngle, More } from "../../icons";

const Export = () => {
  const [exportList, setExportList] = useState<string[]>([""]);

  const addExportItem = () => {
    setExportList((prev) => [...prev, ""]);
  };

  const removeExportItem = () => {
    if (exportList.length !== 0) {
      setExportList((prev) => {
        let array = prev;
        array.splice(array.length - 1, 1);
        return [...array];
      });
    }
  };

  return (
    <Widget
      title="Export"
      titleControls={
        <ControlsStyled>
          <div>
            <button onClick={removeExportItem}>
              <Subtract color="#fff" size={0.45} />
            </button>
          </div>
          <div>
            <button onClick={addExportItem}>
              <Add color="#fff" size={0.45} />
            </button>
          </div>
        </ControlsStyled>
      }
    >
      {exportList.map((item) => (
        <RowStyled>
          <div className="multiplier">1X</div>
          <div className="suffix">Suffix</div>
          <div className="type">
            <span>Jason</span>
            <DownAngle color="#fff" size={0.45} />
          </div>
          <div>
            <More color="#fff" size={0.45} />
          </div>
        </RowStyled>
      ))}
    </Widget>
  );
};

export default Export;
