// Styled
import { ControlsStyled, RowStyled } from "./styled";

// Components
import Widget from "..";
import Checkbox from "../../formElements/Checkbox";
import ColorPicker from "../../common/ColorPicker";
import Select from "../../formElements/Select";

//

const BorisFxMocha = () => {
  return (
    <Widget
      title="Boris FX Mocha"
      titleControls={
        <ControlsStyled>
          <span className="refresh">Refresh</span>
          <span className="close">X</span>
        </ControlsStyled>
      }
    >
      <RowStyled>
        <div className="label">Blend mode</div>
        <div className="value">
          <Select
            id="blend-mode"
            name="blend-mode"
            options={[
              {
                id: "add",
                value: "Add",
              },
              {
                id: "subtract",
                value: "Subtract",
              },
              {
                id: "multiply",
                value: "Multiply",
              },
            ]}
          />
        </div>
      </RowStyled>
      <RowStyled>
        <div className="label">Invert</div>
        <div className="value">
          <Checkbox text="" id="invert" />
        </div>
      </RowStyled>
      <RowStyled>
        <div className="label">Render edge with</div>
        <div className="value">
          <Checkbox text="" id="render-edge" />
        </div>
      </RowStyled>
      <RowStyled>
        <div className="label">Render type</div>
        <div className="value">
          {" "}
          <Select
            id="render-type"
            name="render-type"
            options={[
              {
                id: "shape-1",
                value: "Shape 1",
              },
              {
                id: "shape-2",
                value: "Shape 2",
              },
            ]}
          />
        </div>
      </RowStyled>
      <RowStyled>
        <div className="label">Shape color</div>
        <div className="value">
          <ColorPicker colorCode="#FFFFFF" />
        </div>
      </RowStyled>
    </Widget>
  );
};

export default BorisFxMocha;
