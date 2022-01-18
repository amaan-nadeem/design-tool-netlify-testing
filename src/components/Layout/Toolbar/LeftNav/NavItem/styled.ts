import styled from "styled-components";

type StyledNavItemProps = {
  open: boolean;
};

export const StyledNavItem = styled.div<StyledNavItemProps>`
  position: relative;
  z-index: ${(props) => (props.open ? "20" : "0")};

  button.btn {
    background-color: ${(props) => props.theme.colors.main};
    height: 48px;
    width: 48px;
    border: 1px solid ${(props) => props.theme.colors.lies};
    border-bottom: none;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .drop-down-icon {
      display: block;
      margin-left: 4px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.active};
    }
  }

  .drop-down-popover {
    position: absolute;
    top: 48px;
    left: -1px;
    background-color: ${(props) => props.theme.colors.main};
    border: 1px solid ${(props) => props.theme.colors.lies};
    padding: 8px 0px;
    width: 180px;
    font-size: 14px;

    ul {
      list-style: none;
    }

    .drop-down-item {
      cursor: pointer;
      padding: 8px 16px;

      &:hover {
        background-color: ${(props) => props.theme.colors.lies};
      }
    }
  }
`;
