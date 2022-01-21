// Styled
import { FillControl, FillRow } from "./styled";

// Components
import Widget from "..";
import ColorPicker from "../../common/ColorPicker";

//
import { Dots, Add, Eye, Subtract } from "../../icons";

const Fill = () => {
  return (
    <Widget
      title="Fill"
      titleControls={
        <FillControl>
          <div>
            <Dots color="#fff" size={0.45} />
          </div>
          <div>
            <Add color="#fff" size={0.45} />
          </div>
        </FillControl>
      }
    >
      <FillRow>
        <ColorPicker colorCode="#ffffff" />
        <div className="percentage">100%</div>
        <FillControl>
          <div>
            <Eye color="#fff" size={0.65} />
          </div>
          <div>
            <Subtract color="#fff" size={0.45} />
          </div>
        </FillControl>
      </FillRow>
    </Widget>
  );
};

export default Fill;
