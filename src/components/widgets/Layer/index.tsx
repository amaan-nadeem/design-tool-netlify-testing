// Styled
import { LayerRow } from "./styled";

// Components
import Widget from "..";

//
import { Drop, DownAngle, Eye } from "../../icons";

const Layer = () => {
  return (
    <Widget title="Layer">
      <LayerRow>
        <div className="icon">
          <Drop color="#fff" size={0.7} />
        </div>
        <div className="dropdown">
          <span className="text">Pass through</span>{" "}
          <DownAngle color="#fff" size={0.4} />
        </div>
        <div className="percentage">100%</div>
        <div>
          <Eye color="#fff" size={0.7} />
        </div>
      </LayerRow>
    </Widget>
  );
};

export default Layer;
