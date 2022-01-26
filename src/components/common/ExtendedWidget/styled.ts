import styled from "styled-components";

type ExtendedWidgetStyledType = {
  width: number;
};

export const ExtendedWidgetStyled = styled.div<ExtendedWidgetStyledType>`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.lies};
  background-color: ${(props) => props.theme.colors.main};
  color: #fff;
  width: ${(props) => props.width}px;
  min-width: fit-content;
`;

export const ExtendedWidgetStyledTitle = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  font-weight: 700;
  margin-bottom: 16px;
`;
