// Components
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import CompositionSelector from "./CompositionSelector";

// Styled
import { StyledToolbar } from "./styled";

const Toolbar = () => {
  return (
    <StyledToolbar>
      <LeftNav />
      <CompositionSelector />
      <RightNav />
    </StyledToolbar>
  );
};

export default Toolbar;
