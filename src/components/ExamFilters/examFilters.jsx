import Select from "react-select";
import {
  FiltersContainer,
  FilterSection,
  FilterTitle,
  FilterToggle,
  MobileFilterHeader,
  CloseButton,
  ClearFiltersButton,
} from "./styledComponents";
import { getFilterOptions } from "./data";

const Filters = ({
  filters,
  setFilters,
  isOpen,
  setIsOpen,
  onClearFilters,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
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
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#e8eaf6",
      borderRadius: "4px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#4054b2",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#4054b2",
      "&:hover": {
        backgroundColor: "#4054b2",
        color: "white",
      },
    }),
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value || [],
    }));
  };

  return (
    <>
      <FilterToggle onClick={() => setIsOpen(true)}>Filters</FilterToggle>

      <FiltersContainer isOpen={isOpen}>
        <MobileFilterHeader>
          <h3>Filters</h3>
          <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
        </MobileFilterHeader>

        <ClearFiltersButton onClick={onClearFilters}>
          Clear all filters
        </ClearFiltersButton>

        <FilterSection>
          <FilterTitle>STREAMS</FilterTitle>
          <Select
            isMulti
            options={getFilterOptions.streams}
            value={filters.streams}
            onChange={(value) => handleFilterChange("streams", value)}
            styles={customStyles}
            placeholder="Select streams..."
            isClearable
          />
        </FilterSection>

        <FilterSection>
          <FilterTitle>DEGREE</FilterTitle>
          <Select
            isMulti
            options={getFilterOptions.degree}
            value={filters.degree}
            onChange={(value) => handleFilterChange("degree", value)}
            styles={customStyles}
            placeholder="Select degrees..."
            isClearable
          />
        </FilterSection>

        <FilterSection>
          <FilterTitle>LEVEL</FilterTitle>
          <Select
            isMulti
            options={getFilterOptions.level}
            value={filters.level}
            onChange={(value) => handleFilterChange("level", value)}
            styles={customStyles}
            placeholder="Select level..."
            isClearable
          />
        </FilterSection>

        <FilterSection>
          <FilterTitle>MODE</FilterTitle>
          <Select
            isMulti
            options={getFilterOptions.mode}
            value={filters.mode}
            onChange={(value) => handleFilterChange("mode", value)}
            styles={customStyles}
            placeholder="Select mode..."
            isClearable
          />
        </FilterSection>
      </FiltersContainer>
    </>
  );
};

export default Filters;
