import { useState, useRef, useEffect } from "react";

// Components
import { SelectStyled } from "./styled";

//
import { DownAngle } from "../../icons";

type Option = { value: string; id: string };

type SelectProps = {
  options: Option[];
  id: string;
  name: string;
};

const Select: React.FC<SelectProps> = ({ options, id, name }) => {
  const [activeValue, setActiveValue] = useState<Option>(options[0]);
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = activeValue.id;
    }
  }, [activeValue]);

  return (
    <>
      <select name={name} id={id} style={{ display: "none" }} ref={selectRef}>
        {options.map((opt) => {
          return <option value={opt.id}>{opt.value}</option>;
        })}
      </select>
      <SelectStyled onClick={() => setDropOpen((prev) => !prev)}>
        {activeValue.value}
        <span>
          <DownAngle color="#fff" size={0.4} />
        </span>
        {dropOpen && (
          <div className="drop-down">
            {options.map((opt) => {
              return (
                <div className="item" onClick={() => setActiveValue(opt)}>
                  {opt.value}
                </div>
              );
            })}
          </div>
        )}
      </SelectStyled>
    </>
  );
};

export default Select;
