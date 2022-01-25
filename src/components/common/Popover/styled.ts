import styled from "styled-components";

type PopoverStyledType = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const PopoverStyled = styled.div<PopoverStyledType>`
  position: absolute;
  top: ${(props) =>
    `${typeof props.top === "number" ? `${props.top}px` : "auto"}`};
  left: ${(props) =>
    `${typeof props.left === "number" ? `${props.left}px` : "auto"}`};
  right: ${(props) =>
    `${typeof props.right === "number" ? `${props.right}px` : "auto"}`};
  bottom: ${(props) =>
    `${typeof props.bottom === "number" ? `${props.bottom}px` : "auto"}`};
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.lies};
  padding: 8px 0px;
  width: 180px;
  font-size: ${(props) => `${props.theme.text.default.fontsize}px`};

  .popover-list {
    list-style: none;

    .drop-down-item {
      cursor: pointer;
      padding: 8px 16px;
      color: #fff;

      &:hover {
        background-color: ${(props) => props.theme.colors.lies};
      }

      &.active {
        background-color: ${(props) => props.theme.colors.active};
      }
    }
  }
`;
