import styled from "styled-components";

export const ControlsStyled = styled.div`
  width: 39px;
  height: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  margin-bottom: 8px;

  .multiplier {
    height: 15px;
    margin-right: 40px;
    font-weight: 400;
  }

  .suffix {
    width: 50px;
    margin-right: 20px;
    color: ${(props) => props.theme.colors.inactive};
    border-bottom: 1px solid ${(props) => props.theme.colors.inactive};
    padding-bottom: 2px;
  }

  .type {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
  }
`;
