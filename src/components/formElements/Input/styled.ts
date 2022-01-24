import styled from "styled-components";

type InputStyledType = {
  focused: boolean;
};

export const InputStyled = styled.div<InputStyledType>`
  display: flex;
  align-items: center;
  border-radius: 3px;
  height: 32px;
  padding: 0px 10px;
  border: 1px solid #fff;
  border-color: ${(props) =>
    props.focused ? props.theme.colors.active : props.theme.colors.lies};

  .start {
    margin-right: 8px;
  }
  input {
    height: 100%;
    width: 100%;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
  }
`;
