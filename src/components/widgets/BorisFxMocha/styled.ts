import styled from "styled-components";

export const ControlsStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  width: 70px;
  justify-content: space-between;

  .refresh {
    color: ${(props) => props.theme.colors.active};
  }
  .close {
    font-size: 14px;
    font-weight: 100;
  }
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  margin-bottom: 8px;

  .label {
    width: 50%;
    margin-right: 4px;
  }
  .value {
    width: 50%;
    margin-left: 4px;
  }
`;
