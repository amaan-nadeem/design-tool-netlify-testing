// Styled
import { ViewportStyled } from "./styled";

//
import CartoonImage from "../../../assets/images/cartoon.png";

const Viewport = () => {
  return (
    <ViewportStyled>
      <div id="extended-widget-placeholder"></div>
      <img src={CartoonImage} />
    </ViewportStyled>
  );
};

export default Viewport;
