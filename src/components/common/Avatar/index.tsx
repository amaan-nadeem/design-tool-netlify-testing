// Styled
import { StyledAvatar, StyledImage } from "./styled";

type AvatarProps = {
  src: string;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return <StyledAvatar>{src && <StyledImage src={src} />}</StyledAvatar>;
};

export default Avatar;
