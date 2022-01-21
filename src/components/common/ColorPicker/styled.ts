import styled from "styled-components";

type ColorPickerStyledPrps = {
  colorCode: string;
};

export const ColorPickerStyled = styled.div<ColorPickerStyledPrps>`
  display: flex;
  align-items: center;

  .block {
    height: 16px;
    width: 16px;
    background-color: ${(props) => props.colorCode};
    margin-right: 8px;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.lies};
    cursor: pointer;
  }

  .text {
    font-size: ${(props) => props.theme.text.default.fontsize}px;
  }
`;
