import styled from "styled-components";

export const RightSidebarStyled = styled.div`
  position: absolute;
  background-color: #000;
  top: 0px;
  right: 0px;
  width: 240px;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.lies};
`;
