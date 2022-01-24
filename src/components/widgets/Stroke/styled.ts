import styled from "styled-components";

export const HeaderControlsStyled = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  justify-content: space-between;
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .main {
    width: 80px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.text.default.fontsize}px;

    .icon {
      margin-right: 8px;
    }
  }

  .center {
    flex: 1;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
  }

  .actions {
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
