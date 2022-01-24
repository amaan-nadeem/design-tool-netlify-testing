import { useState, useRef, InputHTMLAttributes } from "react";

// Styled
import { InputStyled } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  start?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ start, id, name, ...rest }) => {
  const [focused, setFocused] = useState<boolean>(false);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onDivClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setFocused(true);
    inputRef.current.focus();
  };

  return (
    <InputStyled onClick={onDivClick} focused={focused}>
      {start && <div className="start">{start}</div>}
      <input
        {...rest}
        type="text"
        className="h-full w-full text-xs bg-transparent outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
        id={id}
        name={name}
      />
    </InputStyled>
  );
};

export default Input;
