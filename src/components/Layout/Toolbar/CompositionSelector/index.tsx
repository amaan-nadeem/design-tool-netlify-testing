// Styles
import { CompositionSelectorStyled } from "./styled";

//
import { DownAngle } from "../../../icons";

const CompositionSelector = () => {
  return (
    <CompositionSelectorStyled>
      <p className="heading">Composition /</p>
      <button className="btn">
        <span className="text">Yaro</span>{" "}
        <DownAngle size={0.46} color="#fff" />
      </button>
    </CompositionSelectorStyled>
  );
};

export default CompositionSelector;
