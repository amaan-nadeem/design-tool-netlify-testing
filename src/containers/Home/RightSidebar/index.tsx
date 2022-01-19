// Components
import Tabs, { Tab } from "../../../components/common/Tabs";
import useTabs from "../../../components/common/Tabs/useTabs";

// Styled
import { RightSidebarStyled } from "./styled";

const allTabs: Tab[] = [
  {
    id: "design",
    text: "Design",
    component: () => null,
  },
  {
    id: "animation",
    text: "Animation",
    component: () => null,
  },
  {
    id: "inspect",
    text: "Inspect",
    component: () => null,
  },
];

const RightSidebar = () => {
  const { component: Component, ...tabs } = useTabs(allTabs, allTabs[0].id);

  return (
    <RightSidebarStyled>
      <Tabs {...tabs} />
      <Component />
    </RightSidebarStyled>
  );
};

export default RightSidebar;
