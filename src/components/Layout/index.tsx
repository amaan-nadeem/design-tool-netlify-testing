// Components
import Toolbar from "./Toolbar";

// Styled
import { StyledLayout } from "./styled";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Toolbar />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
