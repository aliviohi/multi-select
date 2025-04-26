import { useState } from "react";
import { Select } from "./components/select";
import { Option } from "./components/select/types";

const currentOptions: Option[] = [
  { label: "Education", value: "education", icon: "🎓" },
  { label: "Yeeeah, science!", value: "science", icon: "🛸" },
  { label: "Art", value: "art", icon: "🎨" },
  { label: "Sport", value: "sport", icon: "⚽" },
  { label: "Games", value: "games", icon: "🎮" },
  { label: "Health", value: "health", icon: "🩺" },
];

const App = () => {
  const [selected, setSelected] = useState<Option[]>([]);
  return (
    <div style={{ padding: 20 }}>
      <h3>Select or add items</h3>
      <Select
        options={currentOptions}
        selected={selected}
        onChange={setSelected}
        placeholder="Pick some topics…"
      />
    </div>
  );
};

export default App;
