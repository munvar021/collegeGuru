export const streams = [
  { value: "information-technology", label: "Information Technology" },
  { value: "computer-science", label: "Computer Science" },
  { value: "mechanical", label: "Mechanical Engineering" },
  { value: "electrical", label: "Electrical Engineering" },
  { value: "civil", label: "Civil Engineering" },
  { value: "electronics", label: "Electronics & Communication" },
];

export const levels = [
  { value: "ug", label: "UG" },
  { value: "pg", label: "PG" },
  { value: "diploma", label: "Diploma" },
];

export const collegeTypes = [
  { value: "government", label: "Government" },
  { value: "private", label: "Private" },
  { value: "deemed", label: "Deemed University" },
  { value: "autonomous", label: "Autonomous" },
];

export const locations = [
  { value: "hyderabad", label: "Hyderabad" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
  { value: "mumbai", label: "Mumbai" },
  { value: "pune", label: "Pune" },
  { value: "delhi", label: "Delhi" },
];

export const feeRanges = [
  { value: "0-50000", label: "Below 50,000" },
  { value: "50000-100000", label: "50,000 - 1,00,000" },
  { value: "100000-200000", label: "1,00,000 - 2,00,000" },
  { value: "200000-plus", label: "Above 2,00,000" },
];

export const specializations = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "data-science", label: "Data Science" },
  { value: "cyber-security", label: "Cyber Security" },
  { value: "cloud-computing", label: "Cloud Computing" },
];

export const preferencesFormFields = [
  {
    id: "stream",
    label: "Stream",
    type: "select",
    options: streams,
    defaultValue: {
      value: "information-technology",
      label: "Information Technology",
    },
    validation: {
      required: "Stream is required",
    },
  },
  {
    id: "level",
    label: "Level",
    type: "select",
    options: levels,
    defaultValue: { value: "ug", label: "UG" },
    validation: {
      required: "Level is required",
    },
  },
  {
    id: "specialization",
    label: "Specialization",
    type: "select",
    options: specializations,
    defaultValue: { value: "no-preferences", label: "No Preferences" },
    validation: {
      required: false,
    },
  },
  {
    id: "location",
    label: "Location",
    type: "select",
    options: locations,
    defaultValue: { value: "no-preferences", label: "No Preferences" },
    validation: {
      required: false,
    },
  },
  {
    id: "collegeType",
    label: "College Type",
    type: "select",
    options: collegeTypes,
    defaultValue: { value: "no-preferences", label: "No Preferences" },
    validation: {
      required: false,
    },
  },
  {
    id: "feeRange",
    label: "Fee Range",
    type: "select",
    options: feeRanges,
    defaultValue: { value: "no-preferences", label: "No Preferences" },
    validation: {
      required: false,
    },
  },
  {
    id: "colleges",
    label: "Colleges",
    type: "select",
    options: [],
    defaultValue: { value: "no-preferences", label: "No Preferences" },
    validation: {
      required: false,
    },
  },
  {
    id: "studyingAbroad",
    label: "Interested in studying abroad?",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    defaultValue: { value: "no", label: "No" },
    validation: {
      required: true,
    },
  },
  {
    id: "needLoan",
    label: "Need a loan?",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    defaultValue: { value: "no", label: "No" },
    validation: {
      required: true,
    },
  },
];
