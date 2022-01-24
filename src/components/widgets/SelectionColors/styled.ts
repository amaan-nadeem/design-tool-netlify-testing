import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 9px;
  }

  .percentage {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
  }

  .actions {
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
