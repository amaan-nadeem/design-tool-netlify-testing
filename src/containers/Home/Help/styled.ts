import styled from "styled-components";

type HelpContainerStyledTypes = {
  opened: boolean;
};

export const HelpContainerStyled = styled.div<HelpContainerStyledTypes>`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: ${(props) => {
    return props.opened ? "20" : "0";
  }};
`;

export const HelpStyled = styled.button`
  height: 44px;
  width: 44px;
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.lies};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  color: #fff;
  cursor: pointer;
`;
