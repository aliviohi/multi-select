export type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export type SelectProps = {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void;
  placeholder?: string;
};

export type DropDownProps = {
  options: Option[];
  selected: Option[];
  toggleOption: (opt: Option) => void;
  onChange: (selected: Option[]) => void;
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
};

export type SelectedProps = {
  option: Option;
  toggleOption: (opt: Option) => void;
};
