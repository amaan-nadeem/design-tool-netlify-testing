import styled from "styled-components";

type PopoverStyledType = {
  top?: number;
  left?: number;
};

export const PopoverStyled = styled.div<PopoverStyledType>`
  position: absolute;
  top: ${(props) => `${props.top || 0}px`};
  left: ${(props) => `${props.left || 0}px`};
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

      &:hover {
        background-color: ${(props) => props.theme.colors.lies};
      }

      &.active {
        background-color: ${(props) => props.theme.colors.active};
      }
    }
  }
`;
