import { useState } from "react";

// Components
import Backdrop from "../../../../common/Backdrop";

// Styled
import { StyledNavItem } from "./styled";

//
import { Icon, DownAngle } from "../../../../icons";

export type NavItemType = {
  id: string;
  icon: React.FC<Icon>;
  onClick?: React.MouseEventHandler;
  size?: number;
  children?: {
    text: string;
    onClick: React.MouseEventHandler;
  }[];
};

type NavItemProps = {
  navItem: NavItemType;
};

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const Icon = navItem.icon;
  const hasChildren = navItem.children && navItem.children.length !== 0;

  return (
    <>
      <StyledNavItem open={menuOpen}>
        <button className="btn" onClick={() => setMenuOpen((prev) => !prev)}>
          {Icon && <Icon size={navItem.size || 0.8} color="#fff" />}
          {hasChildren && (
            <span className="drop-down-icon">
              <DownAngle size={0.4} color="#fff" />
            </span>
          )}
        </button>
        {hasChildren && menuOpen && (
          <div className="drop-down-popover">
            <ul>
              {navItem.children?.map((child) => (
                <li className="drop-down-item" onClick={child.onClick}>
                  {child.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </StyledNavItem>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default NavItem;