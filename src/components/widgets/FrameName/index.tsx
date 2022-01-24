// Styled
import { FrameRow, FrameRowItem, FrameRowDetail, FrameRowIcon } from "./styled";

// Components
import Widget from "../";
import Checkbox from "../../formElements/Checkbox";

//
import { RightAngle, Curve, Link, Box } from "../../icons";

const FrameName = () => {
  return (
    <Widget title="Frame name">
      <FrameRow>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">X</p>
            <p>1567</p>
          </FrameRowDetail>
        </FrameRowItem>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">Y</p>
            <p>137</p>
          </FrameRowDetail>
        </FrameRowItem>
      </FrameRow>
      <FrameRow>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">W</p>
            <p>240</p>
          </FrameRowDetail>
        </FrameRowItem>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">H</p>
            <p>158</p>
          </FrameRowDetail>
        </FrameRowItem>
        <FrameRowItem>
          <FrameRowIcon>
            <Link size={0.5} color="#fff" />
          </FrameRowIcon>
        </FrameRowItem>
      </FrameRow>
      <FrameRow>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">
              <RightAngle size={0.5} />
            </p>
            <p>1567</p>
          </FrameRowDetail>
        </FrameRowItem>
        <FrameRowItem>
          <FrameRowDetail>
            <p className="label">
              <Curve size={0.45} />
            </p>
            <p>137</p>
          </FrameRowDetail>
        </FrameRowItem>
        <FrameRowItem>
          <FrameRowIcon>
            <Box size={0.5} color="#fff" />
          </FrameRowIcon>
        </FrameRowItem>
      </FrameRow>
      <Checkbox text="Clip content" id="clip-content" />
    </Widget>
  );
};

export default FrameName;
