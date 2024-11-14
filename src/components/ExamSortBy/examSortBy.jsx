import Select from "react-select";
import { SelectContainer } from "./styledComponents";

const SortBy = ({ options, value, onChange }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "200px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #4054b2",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#4054b2"
        : state.isFocused
        ? "#f0f0f0"
        : "white",
      color: state.isSelected ? "white" : "#333",
      "&:hover": {
        backgroundColor: state.isSelected ? "#4054b2" : "#f0f0f0",
      },
    }),
  };

  return (
    <SelectContainer>
      <label>Sort by:</label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        styles={customStyles}
      />
    </SelectContainer>
  );
};

export default SortBy;
