import styled from "styled-components";

export const MotionToolsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 134px;
`;

export const TopRow = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  .corners {
    width: 100px;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.lies};
    padding: 19px;
  }

  .buttons-container {
    width: 100px;
    display: flex;
    flex-direction: column;

    & > button {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }

    .texts {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      button {
        font-size: ${(props) => props.theme.text.default.fontsize}px;
        color: ${(props) => props.theme.colors.inactive};
        background-color: transparent;
        border: none;

        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  height: 26px;

  .seq {
    margin-right: 6px;
    width: 68px;
  }
  .time,
  .layer {
    width: 26px;
    margin-right: 8px;
  }
  .layer {
    margin-right: 5px;
  }
  .one,
  .one-1 {
    width: 32px;
  }
  .one-1 {
    margin-right: 5px;
  }

  button {
    padding: 6px;
  }
`;

export const Button = styled.button`
  height: 26px;
  border: 1px solid ${(props) => props.theme.colors.lies};
  padding: 8px;
  font-size: 10px;
  border-radius: 2px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
`;

export const CornerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;

  .item {
    width: 100%;
    height: 100%;
    background-color: #000;
    border: 1px solid ${(props) => props.theme.colors.lies};
  }
`;
