// Styled
import { StyledTabs, StyledTab } from "./styled";

export type Tab = {
  text: string;
  id: string;
  component: React.FC;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  changeActiveTab: (newTabId: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, changeActiveTab }) => {
  return (
    <StyledTabs>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <StyledTab
            key={tab.id}
            onClick={() => changeActiveTab(tab.id)}
            active={isActive}
          >
            <span className="text">{tab.text}</span>
          </StyledTab>
        );
      })}
    </StyledTabs>
  );
};

export default Tabs;
