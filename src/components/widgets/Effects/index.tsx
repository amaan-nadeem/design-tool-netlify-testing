// Styled
import { EffectsRow } from "./styled";

// Components
import Widget from "..";

//
import { Drop, DownAngle, Eye } from "../../icons";

const Effects = () => {
  return (
    <Widget title="Effects">
      <EffectsRow>
        <div className="icon">
          <Drop color="#fff" size={0.7} />
        </div>
        <div className="dropdown">
          <span className="text">Drop Shadow</span>{" "}
          <DownAngle color="#fff" size={0.4} />
        </div>
        <div className="percentage">100%</div>
        <div>
          <Eye color="#fff" size={0.7} />
        </div>
      </EffectsRow>
    </Widget>
  );
};

export default Effects;
