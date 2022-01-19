import styled from "styled-components";

export const StyledButton = styled.button`
  height: 28px;
  padding: 0px 12px;
  background-color: ${(props) => props.theme.colors.active};
  border: 1px solid ${(props) => props.theme.colors.active};
  border-radius: 4px;
  font-size: ${(props) => `${props.theme.text.default.fontsize}px`};
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`;

export const StyledButtonRound = styled(StyledButton)`
  width: 28px;
  border-radius: 50%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
