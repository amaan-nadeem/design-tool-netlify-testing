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
} from "../../../icons";
import { NavItemType } from "./NavItem";

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
      {navigation.map((navItem) => {
        return <NavItem navItem={navItem} key={navItem.id} />;
      })}
    </StyledLeftNav>
  );
};

export default LeftNav;
