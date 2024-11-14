import { durations, modes } from "./data";
import {
  FiltersContainer,
  FilterSection,
  FilterTitle,
  CheckboxGroup,
  CheckboxLabel,
  RangeInputGroup,
  RangeInput,
  RangeValues,
} from "./styledComponents";

const Filters = ({ filters, onFilterChange }) => {
  const handleDurationChange = (duration) => {
    const newDurations = filters.duration.includes(duration)
      ? filters.duration.filter((d) => d !== duration)
      : [...filters.duration, duration];
    onFilterChange({ ...filters, duration: newDurations });
  };

  const handleModeChange = (mode) => {
    const newModes = filters.mode.includes(mode)
      ? filters.mode.filter((m) => m !== mode)
      : [...filters.mode, mode];
    onFilterChange({ ...filters, mode: newModes });
  };

  const handleFeesChange = (type, value) => {
    onFilterChange({
      ...filters,
      fees: { ...filters.fees, [type]: parseInt(value) },
    });
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterTitle>Duration</FilterTitle>
        <CheckboxGroup>
          {durations.map((duration) => (
            <CheckboxLabel key={duration}>
              <input
                type="checkbox"
                checked={filters.duration.includes(duration)}
                onChange={() => handleDurationChange(duration)}
              />
              {duration}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Mode</FilterTitle>
        <CheckboxGroup>
          {modes.map((mode) => (
            <CheckboxLabel key={mode}>
              <input
                type="checkbox"
                checked={filters.mode.includes(mode)}
                onChange={() => handleModeChange(mode)}
              />
              {mode}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Fees Range (₹)</FilterTitle>
        <RangeInputGroup>
          <RangeInput
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={filters.fees.min}
            onChange={(e) => handleFeesChange("min", e.target.value)}
          />
          <RangeInput
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={filters.fees.max}
            onChange={(e) => handleFeesChange("max", e.target.value)}
          />
          <RangeValues>
            <span>₹{filters.fees.min.toLocaleString("en-IN")}</span>
            <span>₹{filters.fees.max.toLocaleString("en-IN")}</span>
          </RangeValues>
        </RangeInputGroup>
      </FilterSection>
    </FiltersContainer>
  );
};

export default Filters;
