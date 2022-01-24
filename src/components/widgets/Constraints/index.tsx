// Styled
import {
  ConstrainedBoxStyled,
  RowStyled,
  ConstrainedSwitcherStyled,
} from "./styled";

// Components
import Widget from "../";
import Checkbox from "../../formElements/Checkbox";

//
import { HorizontalAlign, VerticalAlign, DownAngle } from "../../icons";

const Constraints = () => {
  return (
    <Widget title="Constraints">
      <RowStyled>
        <ConstrainedBoxStyled>
          <div className="innerbox"></div>
          <div className="top active"></div>
          <div className="bottom"></div>
          <div className="left active"></div>
          <div className="right"></div>
        </ConstrainedBoxStyled>
        <ConstrainedSwitcherStyled>
          <div className="item">
            <HorizontalAlign color="#fff" size={0.65} /> Left{" "}
            <div className="icon">
              <DownAngle color="#fff" size={0.4} />
            </div>
          </div>
          <div className="item">
            <VerticalAlign color="#fff" size={0.65} /> Right{" "}
            <div className="icon">
              <DownAngle color="#fff" size={0.4} />
            </div>
          </div>
        </ConstrainedSwitcherStyled>
      </RowStyled>
      <Checkbox id="fix-position" text="Fix position whan scrolling" />
    </Widget>
  );
};

export default Constraints;
