import { FC, useState } from "react";
import styles from "./styles.module.scss";
import { DropDownProps, Option } from "./types";

const DropDown: FC<DropDownProps> = ({
  options,
  selected,
  toggleOption,
  onChange,
  setOptions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newOpt: Option = {
        label: inputValue.trim(),
        value: inputValue.trim(),
      };
      setOptions((prev) => [...prev, newOpt]);
      onChange([...selected, newOpt]);
      setInputValue("");
    }
  };

  return (
    <div className={styles.dropdown}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type & Enter to add"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul className={styles.options}>
        {options.map((option) => {
          const isSelected = selected.some(
            (item) => item.value === option.value
          );
          return (
            <li
              key={option.value}
              className={`${styles.option} ${
                isSelected ? styles.selected : ""
              }`}
              onClick={() => toggleOption(option)}
            >
              {option.icon && (
                <span className={styles.icon}>{option.icon}</span>
              )}
              {option.label}
              {isSelected && <span className={styles.check}>✔</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { DropDown };
