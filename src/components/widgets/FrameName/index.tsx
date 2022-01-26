import { useState, useCallback } from "react";

// Styled
import { FrameRow, FrameRowItem, FrameRowDetail, FrameRowIcon } from "./styled";

// Components
import Widget from "../";
import ExtendedWidget from "../../common/ExtendedWidget";
import Checkbox from "../../formElements/Checkbox";
import MotionTools from "../../extendedWidgets/MotionTools";

//
import { RightAngle, Curve, Link, Box } from "../../icons";

const FrameName = () => {
  const [extendedOpen, setExtendedOpen] = useState<boolean>(false);

  const toggleExtended: React.MouseEventHandler = useCallback(() => {
    setExtendedOpen((prev) => !prev);
  }, []);

  return (
    <>
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
              <div onClick={toggleExtended}>
                <Box size={0.5} color="#fff" />
              </div>
            </FrameRowIcon>
          </FrameRowItem>
        </FrameRow>
        <Checkbox text="Clip content" id="clip-content" />
      </Widget>
      {extendedOpen && (
        <ExtendedWidget title="motion tools v.2.0" width={240}>
          <MotionTools />
        </ExtendedWidget>
      )}
    </>
  );
};

export default FrameName;
