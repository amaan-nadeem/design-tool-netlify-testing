// Components
import Tabs from "../../../components/common/Tabs";

// Styled
import { LeftSidebarStyled } from "./styled";

//
import { Tab } from "../../../components/common/Tabs";
import useTabs from "../../../components/common/Tabs/useTabs";

const allTabs: Tab[] = [
  {
    id: "layer",
    text: "Layer",
    component: () => null,
  },
  {
    id: "assets",
    text: "Assets",
    component: () => null,
  },
  {
    id: "page1",
    text: "Page 1",
    component: () => null,
  },
];

const LeftSidebar = () => {
  const { component: Component, ...tabs } = useTabs(allTabs, allTabs[0].id);

  return (
    <LeftSidebarStyled>
      <Tabs {...tabs} />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
