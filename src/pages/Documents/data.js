export const TAB_ITEMS = [
  { id: "basicDocuments", label: "Basic Documents" },
  { id: "admissionProof", label: "Admission Proof" },
  { id: "insuranceApplication", label: "Insurance Application" },
];

export const DOCUMENT_TYPES = {
  basicDocuments: [
    { id: "tenth", title: "10th Certificate" },
    { id: "twelfth", title: "12th Certificate" },
    { id: "aadhaar", title: "Aadhaar Card" },
    { id: "pan", title: "PAN Card" },
  ],
  admissionProof: [],
  insuranceApplication: [
    { id: "collegeId", title: "College ID Proof" },
    { id: "admissionReceipt", title: "College Admission Receipt" },
    { id: "parentAadhaar", title: "Parent's Aadhaar Card" },
  ],
};

export const FILE_CONSTRAINTS = {
  maxSize: 2 * 1024 * 1024,
  validFormats: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
};

export const TAB_SUBTITLES = {
  basicDocuments:
    "Upload the documents listed below to build your profile that will help us serve you better and also earn exciting rewards Upload at least 3 documents and earn 50 reward points.",
  admissionProof: "Upload your admission proof and earn 100 reward points.",
  insuranceApplication: "Upload your insurance documents for verification.",
};
