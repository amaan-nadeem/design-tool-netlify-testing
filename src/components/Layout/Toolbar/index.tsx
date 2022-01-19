// Components
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

// Styled
import { StyledToolbar } from "./styled";

const Toolbar = () => {
  return (
    <StyledToolbar>
      <LeftNav />
      <RightNav />
    </StyledToolbar>
  );
};

export default Toolbar;
