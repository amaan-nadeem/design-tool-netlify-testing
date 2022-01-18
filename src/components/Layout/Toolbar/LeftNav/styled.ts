import styled from "styled-components";

export const StyledLeftNav = styled.nav`
  display: flex;
  align-items: center;

  .project-switcher {
    height: 48px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.main};
    border: 1px solid ${(props) => props.theme.colors.lies};
    border-bottom: none;
    cursor: pointer;

    .drop-down-icon {
      margin-left: 4px;
    }
  }
`;
