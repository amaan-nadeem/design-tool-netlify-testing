import styled from "styled-components";

export const StyledLeftNav = styled.nav`
  display: flex;
  align-items: center;

  .project-switcher {
    height: 48px;
    width: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.main};
    border: 1px solid ${(props) => props.theme.colors.lies};
    border-bottom: none;
    cursor: pointer;

    img {
      height: 30px;
      width: 40.5px;
    }

    .drop-down-icon {
      margin-left: 7px;
    }
  }
`;
