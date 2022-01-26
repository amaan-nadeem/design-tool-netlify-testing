// Components
import {
  MotionToolsStyled,
  TopRow,
  BottomRow,
  Button,
  CornerGrid,
} from "./styled";

const MotionTools: React.FC = () => {
  return (
    <MotionToolsStyled>
      <TopRow>
        <div className="corners">
          <CornerGrid>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </CornerGrid>
        </div>
        <div className="buttons-container">
          <Button>Elastic</Button>
          <Button>Bounce</Button>
          <Button>Clone</Button>
          <div className="texts">
            <button>Offset</button>
            <button>Step</button>
          </div>
        </div>
      </TopRow>
      <BottomRow>
        <Button className="seq">sequence</Button>
        <Button className="time">a</Button>
        <Button className="layer">b</Button>
        <Button className="one-1">l</Button>
        <Button className="one">l</Button>
      </BottomRow>
    </MotionToolsStyled>
  );
};

export default MotionTools;
