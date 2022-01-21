import styled from "styled-components";

export const StyledWidget = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lies};
  color: #fff;
`;

export const WidgetTitleContainer = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  .text {
    flex: 1;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
