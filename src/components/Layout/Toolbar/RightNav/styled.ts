import styled from "styled-components";

export const RightNavStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RightNavUnitStyled = styled.div`
  margin-right: 20px;
`;

export const SizeChanger = styled.div`
  height: 22px;
  display: flex;
  align-items: flex-end;
  font-size: ${(props) => `${props.theme.text.default.fontsize}px`};
`;

export const SizeChangerText = styled.span`
  margin-right: 4px;
`;
