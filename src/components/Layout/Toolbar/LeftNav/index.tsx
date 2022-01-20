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
import { useAppDispatch } from "../../../../utils/hooks/store";
import { selectCursor } from "../../../../store/slices/selectionSlice";

const LeftNav = () => {
  const dispatch = useAppDispatch();

  const navigation: NavItemType[] = [
    {
      id: "location",
      icon: Location,
      onClick: () => {
        dispatch(selectCursor("cursor"));
      },
      cursorValue: "cursor",
    },
    {
      id: "number",
      icon: NumberSymbol,
      size: 0.6,
      onClick: () => {},
      children: [
        {
          id: "link1",
          text: "Link 1",
          onClick: () => {
            dispatch(selectCursor("link1"));
          },
          cursorValue: "link1",
        },
        {
          id: "link2",
          text: "Link 2",
          onClick: () => {
            dispatch(selectCursor("link2"));
          },
          cursorValue: "link2",
        },
      ],
    },
    {
      id: "rectangle",
      icon: Rectangle,
      size: 0.6,
      onClick: () => {
        dispatch(selectCursor("rectangle"));
      },
      cursorValue: "rectangle",
    },
    {
      id: "t",
      icon: TLetter,
      size: 0.6,
      onClick: () => {
        dispatch(selectCursor("text"));
      },
      cursorValue: "text",
    },
    {
      id: "pen",
      icon: Pen,
      size: 1.2,
      onClick: () => {
        dispatch(selectCursor("pen"));
      },
      cursorValue: "pen",
    },
  ];

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
