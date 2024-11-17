import * as yup from "yup";

export const preferenceSchema = yup.object().shape({
  academic: yup.object().shape({
    courseType: yup.string().required("Course type is required"),
    studyMode: yup.string().required("Study mode is required"),
    preferredLocation: yup.string().required("Location is required"),
    budgetRange: yup.string().required("Budget range is required"),
    interestedFields: yup.string(),
    admissionTimeline: yup.string(),
  }),
  communication: yup.object().shape({
    preferredLanguage: yup.string().required("Language is required"),
    communicationMode: yup.string().required("Communication mode is required"),
    counselingPreference: yup.string(),
    responseTime: yup.string(),
  }),
});
