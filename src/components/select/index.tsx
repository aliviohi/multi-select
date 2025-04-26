import { useState, useRef, useEffect, FC } from "react";
import { DropDown } from "./dropdown";
import { Selected } from "./selected";
import { SelectProps, Option } from "./types";
import styles from "./styles.module.scss";

export const Select: FC<SelectProps> = ({
  options: initialOptions,
  selected,
  onChange,
  placeholder = "Select…",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const toggleOption = (opt: Option) => {
    const already = selected.find((o) => o.value === opt.value);
    if (already) {
      onChange(selected.filter((o) => o.value !== opt.value));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className={styles.multiSelect} ref={containerRef}>
      <div
        className={styles.control}
        onClick={() => setIsOpen((open) => !open)}
      >
        {selected.length === 0 ? (
          <span className={styles.placeholder}>{placeholder}</span>
        ) : (
          selected.map((option) => (
            <Selected
              key={option.value}
              option={option}
              toggleOption={toggleOption}
            />
          ))
        )}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <DropDown
          options={options}
          selected={selected}
          toggleOption={toggleOption}
          onChange={onChange}
          setOptions={setOptions}
        />
      )}
    </div>
  );
};
