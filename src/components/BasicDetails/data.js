export const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    defaultValue: "User",
    validation: {
      required: "Full name is required",
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: "Please enter valid name",
      },
    },
  },
  {
    id: "dob",
    label: "DOB",
    type: "date",
    required: true,
    defaultValue: "",
    validation: {
      required: "Date of birth is required",
    },
  },
  {
    id: "socialCategory",
    label: "Social Category",
    type: "select",
    required: true,
    defaultValue: "",
    options: [
      { value: "general", label: "General" },
      { value: "obc", label: "OBC" },
      { value: "sc", label: "SC" },
      { value: "st", label: "ST" },
    ],
    validation: {
      required: "Social category is required",
    },
  },
  {
    id: "gender",
    label: "Gender",
    type: "select",
    required: true,
    defaultValue: "",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    validation: {
      required: "Gender is required",
    },
  },
  {
    id: "maritalStatus",
    label: "Marital Status",
    type: "select",
    required: true,
    defaultValue: "",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    validation: {
      required: "Marital status is required",
    },
  },
  {
    id: "physicallyChallengeded",
    label: "Physically Challenged?",
    type: "select",
    required: true,
    defaultValue: "NO",
    options: [
      { value: "YES", label: "Yes" },
      { value: "NO", label: "No" },
    ],
    validation: {
      required: "This field is required",
    },
  },
];
