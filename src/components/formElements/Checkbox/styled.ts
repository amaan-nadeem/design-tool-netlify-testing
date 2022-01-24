import styled from "styled-components";

export const CheckboxStyled = styled.div`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    .presenter {
      height: 16px;
      width: 16px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.colors.lies};
      background-color: transparent;
      position: absolute;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  input:checked {
    & + label {
      .presenter {
        background-color: ${(props) => props.theme.colors.active};

        .icon {
          svg {
            fill: #fff;
          }
        }
      }
    }
  }

  .text {
    padding-left: 24px;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
  }
`;
