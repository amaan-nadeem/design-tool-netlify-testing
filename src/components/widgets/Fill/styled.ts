import styled from "styled-components";

export const FillRow = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-size: ${(props) => props.theme.text.default.fontsize}px;

  .percentage {
    flex: 1;
    text-align: center;
  }
`;

export const FillControl = styled.div`
  display: flex;
  width: 35px;
  align-items: center;
  justify-content: space-between;
`;
