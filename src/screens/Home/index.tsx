// Components
import Viewport from "../../containers/Home/Viewport";
import LeftSidebar from "../../containers/Home/LeftSidebar";
import RightSidebar from "../../containers/Home/RightSidebar";

// Styled
import { HomeStyled } from "./styled";

const Home = () => {
  return (
    <HomeStyled>
      <LeftSidebar />
      <Viewport />
      <RightSidebar />
    </HomeStyled>
  );
};

export default Home;
