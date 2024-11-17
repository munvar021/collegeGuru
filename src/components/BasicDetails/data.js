export const GENDER_OPTIONS = [
  { value: "", label: "Select Gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const SOCIAL_CATEGORY_OPTIONS = [
  { value: "", label: "Select Category" },
  { value: "general", label: "General" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "SC" },
  { value: "st", label: "ST" },
];

export const PHYSICALLY_CHALLENGED_OPTIONS = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
];

export const FORM_VALIDATION_RULES = {
  name: {
    required: "Full Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
    maxLength: {
      value: 50,
      message: "Name cannot exceed 50 characters",
    },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Name can only contain letters and spaces",
    },
  },
  email: {
    required: "Email Address is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
  dateOfBirth: {
    required: "Date of Birth is required",
    validate: (value) =>
      new Date(value) <= new Date() || "Date of birth cannot be in the future",
  },
  gender: {
    required: "Gender is required",
  },
  socialCategory: {
    required: "Social Category is required",
  },
};
