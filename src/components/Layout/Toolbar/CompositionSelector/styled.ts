import styled from "styled-components";

export const CompositionSelectorStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-end;

  .heading {
    margin-right: 4px;
    font-size: ${(props) => `${props.theme.text.default.fontsize}px`};
    color: ${(props) => props.theme.colors.inactive};
    font-weight: 700;
    text-transform: uppercase;
  }

  button.btn {
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: ${(props) => `${props.theme.text.default.fontsize}px`};
    display: flex;
    align-items: flex-end;
    font-weight: 700;

    .text {
      margin-right: 4px;
      text-transform: uppercase;
    }
  }
`;
