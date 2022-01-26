// Components
import Tabs, { Tab } from "../../../components/common/Tabs";
import HierarchyList, {
  HierarchyElement,
} from "../../../components/widgets/HierarchyList";

// Styled
import { LeftSidebarStyled, Page1Button } from "./styled";

//
import useTabs from "../../../components/common/Tabs/useTabs";
import { DownAngle } from "../../../components/icons";

const element: HierarchyElement = {
  id: "root",
  title: "root",
  type: "frame",
  childrens: [
    {
      id: "first",
      title: "first layer",
      type: "layer",
    },
    {
      id: "second",
      title: "second layer",
      type: "layer",
      childrens: [
        {
          id: "welcome",
          title: "Welcome",
          type: "text",
        },
        {
          id: "here",
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
      </>
    ),
  },
  {
    id: "assets",
    text: "Assets",
    component: () => null,
  },
];

const LeftSidebar = () => {
  const { component: Component, ...tabs } = useTabs(allTabs, allTabs[0].id);

  return (
    <LeftSidebarStyled>
      <Tabs
        {...tabs}
        endContent={
          <Page1Button>
            <div className="text">Page 1</div>
            <DownAngle color="#fff" size={0.46} />
          </Page1Button>
        }
      />
      <Component />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
