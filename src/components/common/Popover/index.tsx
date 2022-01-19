// Styled
import { PopoverStyled } from "./styled";

type PopoverProps = {
  top: number;
  left: number;
  items?: {
    onClick: React.MouseEventHandler;
    text: string;
  }[];
};

const Popover: React.FC<PopoverProps> = ({ top, left, items }) => {
  return (
    <PopoverStyled top={top} left={left}>
      <ul className="popover-list">
        {items?.map((child) => (
          <li className="drop-down-item" onClick={child.onClick}>
            {child.text}
          </li>
        ))}
      </ul>
    </PopoverStyled>
  );
};

export default Popover;
