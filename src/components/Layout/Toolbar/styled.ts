import styled from "styled-components";

export const StyledToolbar = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lies};
  color: #fff;
  position: relative;
`;
