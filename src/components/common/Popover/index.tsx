// Styled
import { PopoverStyled } from "./styled";

type PopoverProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  items?: {
    id: string;
    onClick: React.MouseEventHandler;
    text: string;
  }[];
  activeChildren?: string;
};

const Popover: React.FC<PopoverProps> = ({
  top,
  left,
  items,
  right,
  bottom,
  activeChildren,
}) => {
  return (
    <PopoverStyled top={top} left={left} right={right} bottom={bottom}>
      <ul className="popover-list">
        {items?.map((child) => {
          const isActive = activeChildren === child.id;

          return (
            <li
              className={`drop-down-item ${isActive ? "active" : ""}`}
              onClick={child.onClick}
            >
              {child.text}
            </li>
          );
        })}
      </ul>
    </PopoverStyled>
  );
};

export default Popover;
