import { useState } from "react";

// Components
import Backdrop from "../../../../common/Backdrop";
import Popover from "../../../../common/Popover";

// Styled
import { StyledNavItem } from "./styled";

//
import { Icon, DownAngle } from "../../../../icons";
import { useAppSelector } from "../../../../../utils/hooks/store";
import { SelectableCursors } from "../../../../../store/slices/selectionSlice";

export type NavItemType = {
  id: string;
  icon: React.FC<Icon>;
  onClick?: React.MouseEventHandler;
  size?: number;
  children?: {
    id: string;
    text: string;
    onClick: React.MouseEventHandler;
    cursorValue?: SelectableCursors;
  }[];
  cursorValue?: SelectableCursors;
};

type NavItemProps = {
  navItem: NavItemType;
};

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { cursor } = useAppSelector((state) => state.selection);

  const Icon = navItem.icon;
  const hasChildren = navItem.children && navItem.children.length !== 0;

  const isActive = navItem.cursorValue === cursor;

  return (
    <>
      <StyledNavItem open={menuOpen}>
        <button
          className={`btn ${isActive ? "active" : ""}`}
          onClick={(event) => {
            if (hasChildren) {
              setMenuOpen((prev) => !prev);
            } else {
              navItem.onClick && navItem.onClick(event);
            }
          }}
        >
          {Icon && <Icon size={navItem.size || 0.8} color="#fff" />}
          {hasChildren && (
            <span className="drop-down-icon">
              <DownAngle size={0.4} color="#fff" />
            </span>
          )}
        </button>
        {hasChildren && menuOpen && (
          <Popover
            top={48}
            left={-1}
            items={navItem.children}
            activeChildren={cursor}
          />
        )}
      </StyledNavItem>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default NavItem;
