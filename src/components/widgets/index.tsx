// Styled
import { StyledWidget, WidgetTitleContainer } from "./styled";

type WidgetProps = {
  title: string;
  titleControls?: React.ReactNode;
};

const Widget: React.FC<WidgetProps> = ({ children, title, titleControls }) => {
  return (
    <StyledWidget>
      <WidgetTitleContainer>
        <h3 className="text">{title}</h3>
        {titleControls && <div>{titleControls}</div>}
      </WidgetTitleContainer>
      {children}
    </StyledWidget>
  );
};

export default Widget;
