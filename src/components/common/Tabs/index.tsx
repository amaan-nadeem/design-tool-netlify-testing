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
  endContent?: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  changeActiveTab,
  endContent,
}) => {
  return (
    <StyledTabs>
      <ul>
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
      </ul>
      {endContent && <div>{endContent}</div>}
    </StyledTabs>
  );
};

export default Tabs;
