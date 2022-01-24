// Styled
import { HeaderControlsStyled, RowStyled } from "./styled";

// Components
import Widget from "../";
import ColorPicker from "../../common/ColorPicker";

//
import { Dots, Add, Eye, Subtract, DownAngle, More, Layers } from "../../icons";

const index = () => {
  return (
    <Widget
      title="Stroke"
      titleControls={
        <HeaderControlsStyled>
          <Dots color="#fff" size={0.5} />
          <Add color="#fff" size={0.6} />
        </HeaderControlsStyled>
      }
    >
      <RowStyled>
        <div className="main">
          <ColorPicker colorCode="#FFFFFF" />
        </div>
        <div className="center">100%</div>
        <div className="actions">
          <Eye color="#fff" size={0.7} />
          <Subtract color="#fff" size={0.65} />
        </div>
      </RowStyled>
      <RowStyled>
        <div className="main">
          <div className="icon">
            <Layers size={0.55} color="#fff" />
          </div>
          <span>1</span>
        </div>
        <div className="center">
          Inside <DownAngle size={0.4} color="#fff" />
        </div>
        <div className="actions">
          <div></div>
          <More color="#fff" size={0.6} />
        </div>
      </RowStyled>
    </Widget>
  );
};

export default index;
