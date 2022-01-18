import ReactDOM from "react-dom";

// Styled
import { StyledBackdrop } from "./styled";

type BackdropProps = {
  onClick: React.MouseEventHandler;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClick}></StyledBackdrop>,
    document.getElementById("backdrop-placeholder")!
  );
};

export default Backdrop;
