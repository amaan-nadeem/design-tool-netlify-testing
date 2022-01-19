import styled from "styled-components";

export const LeftSidebarStyled = styled.div`
  position: absolute;
  background-color: #000;
  top: 0px;
  left: 0px;
  width: 240px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.lies};
`;
