import styled from "styled-components";

export const EffectsRow = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-size: ${(props) => props.theme.text.default.fontsize}px;

  .icon {
    margin-right: 12px;
  }

  .dropdown {
    flex: 1;
    display: flex;
    align-items: flex-end;

    .text {
      margin-right: 4px;
    }
  }

  .percentage {
    margin-right: 18px;
  }
`;
