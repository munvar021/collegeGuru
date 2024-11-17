export const boardOptions = [
  { value: "cbse", label: "CBSE" },
  { value: "icse", label: "ICSE" },
  { value: "state", label: "State Board" },
];

export const marksTypeOptions = [
  { value: "percentage", label: "Percentage" },
  { value: "cgpa", label: "CGPA" },
];

export const graduationTypeOptions = [
  { value: "undergraduate", label: "Under Graduate" },
  { value: "postgraduate", label: "Post Graduate" },
  { value: "doctorate", label: "Doctorate" },
  { value: "diploma", label: "Diploma" },
];

export const generateYearOptions = () => {
  return Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(
    (year) => ({
      value: year.toString(),
      label: year.toString(),
    })
  );
};

export const formFields = {
  class_x: [
    {
      name: "board",
      label: "Board",
      type: "select",
      options: "boardOptions",
      required: "Board is required",
    },
    {
      name: "school",
      label: "School Name",
      type: "text",
      required: "School name is required",
      maxLength: {
        value: 100,
        message: "School name must be less than 100 characters",
      },
    },
    {
      name: "passingYear",
      label: "Passing Year",
      type: "select",
      options: "yearOptions",
      required: "Passing year is required",
    },
    {
      name: "marksType",
      label: "Marks Type",
      type: "select",
      options: "marksTypeOptions",
      required: "Marks type is required",
    },
    {
      name: "percentage",
      label: "Percentage/CGPA",
      type: "number",
      required: "Percentage/CGPA is required",
      validate: {
        range: (v) =>
          (parseFloat(v) >= 0 && parseFloat(v) <= 100) ||
          "Please enter a valid percentage between 0 and 100",
      },
    },
  ],
  class_xii: [
    {
      name: "board",
      label: "Board",
      type: "select",
      options: "boardOptions",
      required: "Board is required",
    },
    {
      name: "school",
      label: "School Name",
      type: "text",
      required: "School name is required",
      maxLength: {
        value: 100,
        message: "School name must be less than 100 characters",
      },
    },
    {
      name: "passingYear",
      label: "Passing Year",
      type: "select",
      options: "yearOptions",
      required: "Passing year is required",
    },
    {
      name: "marksType",
      label: "Marks Type",
      type: "select",
      options: "marksTypeOptions",
      required: "Marks type is required",
    },
    {
      name: "percentage",
      label: "Percentage/CGPA",
      type: "number",
      required: "Percentage/CGPA is required",
      validate: {
        range: (v) =>
          (parseFloat(v) >= 0 && parseFloat(v) <= 100) ||
          "Please enter a valid percentage between 0 and 100",
      },
    },
  ],
  graduation: [
    {
      name: "graduationType",
      label: "Degree Level",
      type: "select",
      options: "graduationTypeOptions",
      required: "Degree level is required",
    },
    {
      name: "college",
      label: "College Name",
      type: "text",
      required: "College name is required",
      maxLength: {
        value: 100,
        message: "College name must be less than 100 characters",
      },
    },
    {
      name: "degree",
      label: "Degree",
      type: "text",
      required: "Degree is required",
      maxLength: {
        value: 100,
        message: "Degree must be less than 100 characters",
      },
    },
    {
      name: "passingYear",
      label: "Passing Year",
      type: "select",
      options: "yearOptions",
      required: "Passing year is required",
    },
    {
      name: "marksType",
      label: "Marks Type",
      type: "select",
      options: "marksTypeOptions",
      required: "Marks type is required",
    },
    {
      name: "percentage",
      label: "Percentage/CGPA",
      type: "number",
      required: "Percentage/CGPA is required",
      validate: {
        range: (v) =>
          (parseFloat(v) >= 0 && parseFloat(v) <= 100) ||
          "Please enter a valid percentage between 0 and 100",
      },
    },
  ],
};

export const formConfig = {
  defaultValues: {
    class_x: {
      board: "",
      school: "",
      passingYear: "",
      marksType: "",
      percentage: "",
    },
    class_xii: {
      board: "",
      school: "",
      passingYear: "",
      marksType: "",
      percentage: "",
    },
    graduation: {
      college: "",
      passingYear: "",
      degree: "",
      graduationType: "",
      marksType: "",
      percentage: "",
    },
  },
  sections: {
    class_x: "Class X Details",
    class_xii: "Class XII Details",
    graduation: "Graduation Details",
  },
};
