// Components
import Tabs, { Tab } from "../../../components/common/Tabs";
import useTabs from "../../../components/common/Tabs/useTabs";

// Widgets
import FrameName from "../../../components/widgets/FrameName";
import Layer from "../../../components/widgets/Layer";
import Fill from "../../../components/widgets/Fill";
import Effects from "../../../components/widgets/Effects";
import SelectionColors from "../../../components/widgets/SelectionColors";
import Stroke from "../../../components/widgets/Stroke";
import Constraints from "../../../components/widgets/Constraints";
import AnimationEffects from "../../../components/widgets/AnimationEffects";
import BorisFxMocha from "../../../components/widgets/BorisFxMocha";
import Export from "../../../components/widgets/Export";

// Styled
import { RightSidebarStyled } from "./styled";

const allTabs: Tab[] = [
  {
    id: "design",
    text: "Design",
    component: () => (
      <>
        <FrameName />
        <Layer />
        <Fill />
        <Effects />
        <SelectionColors />
        <Stroke />
        <Constraints />
      </>
    ),
  },
  {
    id: "animation",
    text: "Animation",
    component: () => (
      <>
        <AnimationEffects />
        <BorisFxMocha />
        <Export />
      </>
    ),
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
