import styled from "styled-components";

export const InputContainerStyled = styled.div`
  margin-bottom: 8px;
`;

export const SearchResultsStyled = styled.div`
  border: 2px solid ${(props) => props.theme.colors.lies};
  padding: 4px;
  border-radius: 3px;

  .effects-list {
    max-height: 192px;
    overflow-y: auto;
    padding-right: 4px;
    &::-webkit-scrollbar {
      width: 1px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      padding: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background: #20f384;
      border-radius: 0px;
    }

    li {
      margin-bottom: 1px;
      border: 2px solid ${(props) => props.theme.colors.lies};
      border-radius: 3px;
      padding: 8px;
      font-size: ${(props) => props.theme.text.default.fontsize}px;
    }
  }
`;
