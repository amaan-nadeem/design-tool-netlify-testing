import styled from "styled-components";

export const SelectStyled = styled.div`
  height: 22px;
  border: 1px solid ${(props) => props.theme.colors.lies};
  border-radius: 2px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: ${(props) => props.theme.text.default.fontsize}px;

  .drop-down {
    position: absolute;
    top: 22px;
    left: 0px;
    z-index: 10;
    width: 100%;
    padding: 4px 0px;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.lies};
    background-color: #000;

    .item {
      padding: 4px 8px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.lies};
      }
    }
  }
`;
