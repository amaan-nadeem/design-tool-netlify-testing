// Components
import NavItem from "./NavItem";

// Styled
import { StyledLeftNav } from "./styled";

//
import {
  Location,
  NumberSymbol,
  Pen,
  Rectangle,
  TLetter,
  DownAngle,
} from "../../../icons";
import { NavItemType } from "./NavItem";
import Logo from "../../../../assets/images/logo.svg";

const navigation: NavItemType[] = [
  {
    id: "location",
    icon: Location,
  },
  {
    id: "number",
    icon: NumberSymbol,
    size: 0.6,
    onClick: () => {},
    children: [
      {
        text: "Link 1",
        onClick: () => {},
      },
      {
        text: "Link 2",
        onClick: () => {},
      },
    ],
  },
  {
    id: "rectangle",
    icon: Rectangle,
    size: 0.6,
  },
  {
    id: "t",
    icon: TLetter,
    size: 0.6,
  },
  {
    id: "pen",
    icon: Pen,
    size: 1.2,
  },
];

const LeftNav = () => {
  return (
    <StyledLeftNav>
      <button className="project-switcher">
        <img src={Logo} />
        <span className="drop-down-icon">
          <DownAngle size={0.4} color="#fff" />
        </span>
      </button>
      {navigation.map((navItem) => {
        return <NavItem navItem={navItem} key={navItem.id} />;
      })}
    </StyledLeftNav>
  );
};

export default LeftNav;
