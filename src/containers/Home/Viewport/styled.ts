import styled from "styled-components";

export const ViewportStyled = styled.div`
  height: 100%;
  width: (100% - 480px);
  background-color: orange;
  margin-right: 240px;
  margin-left: 240px;
  background-color: #0c0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #extended-widget-placeholder {
    position: absolute;
    top: 43px;
    right: 31px;
  }
`;
