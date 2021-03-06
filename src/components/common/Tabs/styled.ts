import styled from "styled-components";

type StyledTabType = {
  active?: boolean;
};

export const StyledTabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lies};
  align-items: center;

  ul {
    display: flex;
    list-style: none;
  }
`;

export const StyledTab = styled.li<StyledTabType>`
  padding: 12px 0px;
  cursor: pointer;

  .text {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.text.default.fontsize}px;
    font-weight: 700;
    color: ${(props) =>
      props.active ? props.theme.colors.active : props.theme.colors.inactive};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
