// Styled
import { ViewportStyled } from "./styled";

//
import CartoonImage from "../../../assets/images/cartoon.png";

const Viewport = () => {
  return (
    <ViewportStyled>
      <img src={CartoonImage} />
    </ViewportStyled>
  );
};

export default Viewport;
