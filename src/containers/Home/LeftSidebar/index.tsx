// Components
import Tabs, { Tab } from "../../../components/common/Tabs";
import HierarchyList, {
  HierarchyElement,
} from "../../../components/widgets/HierarchyList";

// Styled
import { LeftSidebarStyled } from "./styled";

//
import useTabs from "../../../components/common/Tabs/useTabs";

const element: HierarchyElement = {
  title: "video",
  type: "frame",
  childrens: [
    {
      title: "first layer",
      type: "layer",
    },
    {
      title: "second layer",
      type: "layer",
      childrens: [
        {
          title: "Welcome",
          type: "text",
        },
        {
          title: "Here",
          type: "text",
        },
      ],
    },
  ],
};

const allTabs: Tab[] = [
  {
    id: "layer",
    text: "Layer",
    component: () => (
      <>
        <HierarchyList element={element} layer={0} />
        <HierarchyList element={element} layer={0} />
        <HierarchyList element={element} layer={0} />
      </>
    ),
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
      <Component />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
