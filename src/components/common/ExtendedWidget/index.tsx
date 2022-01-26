import ReactDom from "react-dom";

// Styled
import { ExtendedWidgetStyled, ExtendedWidgetStyledTitle } from "./styled";

type ExtendedWidgetProps = {
  title: string;
  width?: number;
};

const ExtendedWidget: React.FC<ExtendedWidgetProps> = ({
  children,
  title,
  width = 100,
}) => {
  const target = document.getElementById("extended-widget-placeholder");

  if (!target) {
    return null;
  }

  return ReactDom.createPortal(
    <ExtendedWidgetStyled width={width}>
      {title && <ExtendedWidgetStyledTitle>{title}</ExtendedWidgetStyledTitle>}
      {children}
    </ExtendedWidgetStyled>,
    target
  );
};

export default ExtendedWidget;
