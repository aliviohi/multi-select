import { FC } from "react";
import styles from "./styles.module.scss";
import { SelectedProps } from "./types";

const Selected: FC<SelectedProps> = ({ option, toggleOption }) => {
  return (
    <span className={styles.tag}>
      {option.icon && <span className={styles.icon}>{option.icon}</span>}
      {option.label}
      <span
        className={styles.remove}
        onClick={(e) => {
          e.stopPropagation();
          toggleOption(option);
        }}
      >
        ×
      </span>
    </span>
  );
};

export { Selected };
