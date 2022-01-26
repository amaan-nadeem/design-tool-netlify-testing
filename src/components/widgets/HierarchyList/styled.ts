import styled from "styled-components";

type HierarchyListItemStyledType = {
  isActive: boolean;
};
type HierarchyListItemIconStyledType = {
  layer: number;
};
type HierarchyListItemButtonStyledType = {
  open: boolean;
};

export const HierarchyListItemStyled = styled.div<HierarchyListItemStyledType>`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lies};
  }

  ${(props) =>
    props.isActive ? `background-color: ${props.theme.colors.lies};` : ""}
`;

export const HierarchyListItemIconStyled = styled.div<HierarchyListItemIconStyledType>`
  margin-right: 8px;
  margin-top: 4px;
  margin-left: ${(props) => `${props.layer * 22}px`};
`;

export const HierarchyListItemTextStyled = styled.span`
  flex: 1;
  font-size: ${(props) => `${props.theme.text.default.fontsize}px`};
`;

export const HierarchyListItemButtonStyled = styled.button<HierarchyListItemButtonStyledType>`
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
  }

  .icon {
    display: block;
    transform: ${(props) => (props.open ? "" : "rotate(-90deg)")};
  }
`;
