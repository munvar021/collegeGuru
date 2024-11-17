import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FORM_OPTIONS } from "./data";
import { preferenceSchema } from "./formSchema";
import {
  PreferenceContainer,
  PreferenceSection,
  SectionTitle,
  PreferenceGrid,
  FormGroup,
  Label,
  Select,
  Button,
  ButtonContainer,
  WarningText,
  SelectWrapper,
  FormContainer,
  LoadingOverlay,
  ErrorContainer,
  SuccessContainer,
  ValidationIcon,
  HelperText,
} from "./styledComponents";

const Preferences = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(preferenceSchema),
    defaultValues: {
      academic: {
        courseType: "",
        studyMode: "",
        preferredLocation: "",
        budgetRange: "",
        interestedFields: "",
        admissionTimeline: "",
      },
      communication: {
        preferredLanguage: "",
        communicationMode: "",
        counselingPreference: "",
        responseTime: "",
      },
    },
  });

  const [formStatus, setFormStatus] = React.useState({
    success: false,
    error: false,
    message: "",
    lastSaved: null,
  });

  const onSubmit = async (data) => {
    try {
      setFormStatus((prev) => ({ ...prev, success: false, error: false }));

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const timestamp = new Date().toLocaleString();
      setFormStatus({
        success: true,
        error: false,
        message: "Preferences saved successfully!",
        lastSaved: timestamp,
      });

      console.log("User Preferences Submitted:", {
        ...data,
        timestamp,
        status: "Success",
      });
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: "Failed to save preferences. Please try again.",
        lastSaved: null,
      });
    }
  };

  const handleReset = () => {
    reset();
    setFormStatus({
      success: false,
      error: false,
      message: "",
      lastSaved: null,
    });
    console.log("Form reset to default values");
  };

  const renderSelect = (category, field, options, label) => (
    <FormGroup>
      <Label>{label}</Label>
      <SelectWrapper>
        <Select
          {...register(`${category}.${field}`)}
          hasError={!!errors[category]?.[field]}
        >
          <option value="">Select {label}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        {errors[category]?.[field] && (
          <WarningText>{errors[category][field].message}</WarningText>
        )}
        {touchedFields[category]?.[field] && !errors[category]?.[field] && (
          <ValidationIcon isValid={true}>✓</ValidationIcon>
        )}
      </SelectWrapper>
    </FormGroup>
  );

  return (
    <PreferenceContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitting && (
            <LoadingOverlay>
              <div>Saving preferences...</div>
            </LoadingOverlay>
          )}

          {formStatus.error && (
            <ErrorContainer>{formStatus.message}</ErrorContainer>
          )}

          {formStatus.success && (
            <SuccessContainer>{formStatus.message}</SuccessContainer>
          )}

          <PreferenceSection>
            <SectionTitle>Academic Preferences</SectionTitle>
            <PreferenceGrid>
              {renderSelect(
                "academic",
                "courseType",
                FORM_OPTIONS.courseTypes,
                "Course Type"
              )}
              {renderSelect(
                "academic",
                "studyMode",
                FORM_OPTIONS.studyModes,
                "Study Mode"
              )}
              {renderSelect(
                "academic",
                "preferredLocation",
                FORM_OPTIONS.locations,
                "Preferred Location"
              )}
              {renderSelect(
                "academic",
                "budgetRange",
                FORM_OPTIONS.budgetRanges,
                "Budget Range"
              )}
            </PreferenceGrid>
          </PreferenceSection>

          <PreferenceSection>
            <SectionTitle>Communication Preferences</SectionTitle>
            <PreferenceGrid>
              {renderSelect(
                "communication",
                "preferredLanguage",
                FORM_OPTIONS.languages,
                "Preferred Language"
              )}
              {renderSelect(
                "communication",
                "communicationMode",
                FORM_OPTIONS.communicationModes,
                "Communication Mode"
              )}
            </PreferenceGrid>
          </PreferenceSection>

          <ButtonContainer>
            <Button type="button" onClick={handleReset}>
              Reset Preferences
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Preferences"}
            </Button>
          </ButtonContainer>

          {formStatus.lastSaved && (
            <HelperText>Last saved: {formStatus.lastSaved}</HelperText>
          )}
        </form>
      </FormContainer>
    </PreferenceContainer>
  );
};

export default Preferences;
