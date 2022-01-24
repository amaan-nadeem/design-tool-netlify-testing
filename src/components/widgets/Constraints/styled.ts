import styled from "styled-components";

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ConstrainedBoxStyled = styled.div`
  height: 64px;
  width: 64px;
  border: 1px solid ${(props) => props.theme.colors.lies};
  position: relative;
  margin-right: 16px;

  .innerbox {
    height: 38px;
    width: 38px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${(props) => props.theme.colors.lies};

    &:before {
      content: "";
      background-color: ${(props) => props.theme.colors.lies};
      top: 50%;
      left: 50%;
      width: 2px;
      height: 15px;
      transform: translate(-50%, -50%);
      position: absolute;
      display: block;
    }
    &:after {
      content: "";
      background-color: ${(props) => props.theme.colors.lies};
      top: 50%;
      left: 50%;
      width: 15px;
      height: 2px;
      transform: translate(-50%, -50%);
      position: absolute;
      display: block;
    }
  }

  .top,
  .bottom,
  .left,
  .right {
    position: absolute;
    background-color: ${(props) => props.theme.colors.lies};
    width: 2px;
  }
  .top,
  .bottom {
    left: 50%;
    transform: translateX(-50%);
    height: 8px;
    width: 2px;
  }
  .top.active,
  .bottom.active {
    width: 4px;
    background-color: ${(props) => props.theme.colors.active};
  }
  .left,
  .right {
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    width: 8px;
  }
  .left.active,
  .right.active {
    height: 4px;
    background-color: ${(props) => props.theme.colors.active};
  }

  .top {
    top: 2px;
  }
  .bottom {
    bottom: 2px;
  }
  .left {
    left: 2px;
  }
  .right {
    right: 2px;
  }
`;

export const ConstrainedSwitcherStyled = styled.div`
  flex: 1;

  .item {
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme.text.default.fontsize}px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    .icon {
      margin-top: 4px;
    }
  }
`;
