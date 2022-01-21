import styled from "styled-components";

export const FrameRow = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
`;

export const FrameRowItem = styled.div`
  width: 33.333%;
`;

export const FrameRowDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.default.fontsize}px;
  font-weight: 700;

  .label {
    color: ${(props) => props.theme.colors.inactive};
    margin-right: 12px;
    width: 15px;
  }
`;

export const FrameRowIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
