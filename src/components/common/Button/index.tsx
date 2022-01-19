// Styled
import { StyledButton, StyledButtonRound } from "./styled";

type ButtonProps = {
  rounded?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, rounded = false }) => {
  if (rounded) {
    return <StyledButtonRound>{children}</StyledButtonRound>;
  }

  return <StyledButton>{children}</StyledButton>;
};

export default Button;
