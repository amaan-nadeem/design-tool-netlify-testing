// Components
import Avatar from "../../../common/Avatar";
import Button from "../../../common/Button";

// Styled
import {
  RightNavStyled,
  RightNavUnitStyled,
  SizeChanger,
  SizeChangerText,
} from "./styled";

//
import { PlayButton, DownAngle } from "../../../icons";

const RightNav = () => {
  return (
    <RightNavStyled>
      <RightNavUnitStyled>
        <Avatar src="" />
      </RightNavUnitStyled>
      <RightNavUnitStyled>
        <Button>Share</Button>
      </RightNavUnitStyled>
      <RightNavUnitStyled>
        <Button rounded>
          <PlayButton size={1.3} />
        </Button>
      </RightNavUnitStyled>
      <RightNavUnitStyled>
        <SizeChanger>
          <SizeChangerText>162%</SizeChangerText>
          <DownAngle size={0.4} color="#fff" />
        </SizeChanger>
      </RightNavUnitStyled>
    </RightNavStyled>
  );
};

export default RightNav;
