// Components
import Viewport from "../../containers/Home/Viewport";
import LeftSidebar from "../../containers/Home/LeftSidebar";
import RightSidebar from "../../containers/Home/RightSidebar";
import Help from "../../containers/Home/Help";

// Styled
import { HomeStyled } from "./styled";

const Home = () => {
  return (
    <HomeStyled>
      <LeftSidebar />
      <Viewport />
      <RightSidebar />
      <Help />
    </HomeStyled>
  );
};

export default Home;
