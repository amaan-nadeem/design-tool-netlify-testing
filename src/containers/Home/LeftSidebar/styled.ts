import styled from "styled-components";

export const LeftSidebarStyled = styled.div`
  position: absolute;
  background-color: #000;
  top: 0px;
  left: 0px;
  width: 240px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.lies};
  color: #fff;
`;

export const Page1Button = styled.button`
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  font-weight: 700;
  display: flex;
  color: #fff;
  background-color: transparent;
  border: none;
  align-items: flex-end;

  .text {
    margin-right: 4px;
  }
`;
