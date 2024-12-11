export const boards = [
  { value: "cbse", label: "CBSE" },
  { value: "state", label: "State Board" },
  { value: "icse", label: "ICSE" },
  { value: "igcse", label: "IGCSE" },
];

export const streams = [
  { value: "science", label: "Science" },
  { value: "commerce", label: "Commerce" },
  { value: "arts", label: "Arts" },
];

export const marksTypes = [
  { value: "percentage", label: "Percentage" },
  { value: "cgpa", label: "CGPA" },
];

export const degrees = [
  { value: "be", label: "B.E/B.Tech" },
  { value: "bsc", label: "B.Sc" },
  { value: "bcom", label: "B.Com" },
  { value: "ba", label: "B.A" },
  { value: "bba", label: "BBA" },
];

const currentYear = new Date().getFullYear();
const startYear = 1990;
const futureYears = 4;

export const years = Array.from(
  { length: currentYear - startYear + 1 + futureYears },
  (_, i) => ({
    value: String(startYear + i),
    label: String(startYear + i),
  })
);

export const graduationYears = Array.from(
  { length: currentYear - startYear + 1 + futureYears },
  (_, i) => {
    const year = startYear + i;
    const isFutureYear = year > currentYear;
    return {
      value: String(year),
      label: `${year}${isFutureYear ? " (Expected)" : ""}`,
      isFuture: isFutureYear,
    };
  }
);

export const educationFormFields = {
  classX: [
    {
      id: "board",
      label: "Board",
      type: "select",
      options: boards,
      validation: { required: "Board is required" },
    },
    {
      id: "school",
      label: "School",
      type: "text",
      validation: { required: "School name is required" },
    },
    {
      id: "passingYear",
      label: "Passing Year",
      type: "select",
      options: years,
      validation: {
        required: "Passing year is required",
        validate: (value) => {
          const year = parseInt(value.value);
          return (
            year <= currentYear ||
            "Cannot select future year for past education"
          );
        },
      },
    },
    {
      id: "marksType",
      label: "Marks Type",
      type: "select",
      options: marksTypes,
      validation: { required: "Marks type is required" },
    },
    {
      id: "percentage",
      label: "Percentage/ CGPA",
      type: "number",
      validation: {
        required: "Percentage/CGPA is required",
        validate: (value) =>
          (value >= 0 && value <= 100) ||
          "Please enter a valid percentage/CGPA",
      },
    },
  ],
  classXII: [
    {
      id: "board",
      label: "Board",
      type: "select",
      options: boards,
      validation: { required: "Board is required" },
    },
    {
      id: "school",
      label: "School",
      type: "text",
      validation: { required: "School name is required" },
    },
    {
      id: "passingYear",
      label: "Passing Year",
      type: "select",
      options: years,
      validation: {
        required: "Passing year is required",
        validate: (value) => {
          const year = parseInt(value.value);
          return (
            year <= currentYear ||
            "Cannot select future year for past education"
          );
        },
      },
    },
    {
      id: "stream",
      label: "Stream",
      type: "select",
      options: streams,
      validation: { required: "Stream is required" },
    },
    {
      id: "marksType",
      label: "Marks Type",
      type: "select",
      options: marksTypes,
      validation: { required: "Marks type is required" },
    },
    {
      id: "percentage",
      label: "Percentage/ CGPA",
      type: "number",
      validation: {
        required: "Percentage/CGPA is required",
        validate: (value) =>
          (value >= 0 && value <= 100) ||
          "Please enter a valid percentage/CGPA",
      },
    },
  ],
  graduation: [
    {
      id: "college",
      label: "College",
      type: "text",
      validation: { required: "College name is required" },
    },
    {
      id: "passingYear",
      label: "Passing Year",
      type: "select",
      options: graduationYears,
      validation: {
        required: "Passing year is required",
      },
    },
    {
      id: "degree",
      label: "Degree",
      type: "select",
      options: degrees,
      validation: { required: "Degree is required" },
    },
    {
      id: "marksType",
      label: "Marks Type",
      type: "select",
      options: marksTypes,
      validation: { required: "Marks type is required" },
    },
    {
      id: "percentage",
      label: "Percentage/ CGPA",
      type: "number",
      validation: {
        required: "Percentage/CGPA is required",
        validate: (value, formValues) => {
          if (!value || Number.isNaN(value))
            return "Please enter a valid number";
          if (value < 0 || value > 100)
            return "Please enter a valid percentage/CGPA";
          return true;
        },
      },
    },
  ],
};
