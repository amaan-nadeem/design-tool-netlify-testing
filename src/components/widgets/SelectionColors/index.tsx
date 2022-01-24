// Styled
import { StyledRow } from "./styled";

// Components
import Widget from "../";
import ColorPicker from "../../common/ColorPicker";

//
import { Dots, Aim } from "../../icons";

const SelectionColors = () => {
  return (
    <Widget title="Selection Color">
      <StyledRow>
        <ColorPicker colorCode="#FFFFFF" />
      </StyledRow>
      <StyledRow>
        <ColorPicker colorCode="#15FFD5" />
        <div className="percentage">
          <p>100%</p>
        </div>
        <div className="actions">
          <Dots color="#fff" size={0.5} />
          <Aim color="#fff" size={0.7} />
        </div>
      </StyledRow>
    </Widget>
  );
};

export default SelectionColors;
