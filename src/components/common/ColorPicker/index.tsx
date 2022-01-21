// Styled
import { ColorPickerStyled } from "./styled";

type ColorPickerProps = {
  colorCode: string;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ colorCode }) => {
  return (
    <ColorPickerStyled colorCode={colorCode}>
      <button className="block"></button>
      <div className="text">{colorCode}</div>
    </ColorPickerStyled>
  );
};

export default ColorPicker;
