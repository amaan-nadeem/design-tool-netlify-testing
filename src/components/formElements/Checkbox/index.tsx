// Styled
import { CheckboxStyled } from "./styled";

//
import { Checkmark } from "../../icons";

type CheckboxProps = {
  text: string;
  id: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ text, id }) => {
  return (
    <CheckboxStyled>
      <input type="checkbox" style={{ display: "none" }} id={id} />
      <label htmlFor={id}>
        <div className="presenter">
          <div className="icon">
            <Checkmark color={undefined} size={0.44} />
          </div>
        </div>
        <div className="text">{text}</div>
      </label>
    </CheckboxStyled>
  );
};

export default Checkbox;
