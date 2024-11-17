import React from "react";
import { useForm } from "react-hook-form";
import {
  formFields,
  boardOptions,
  marksTypeOptions,
  graduationTypeOptions,
  generateYearOptions,
} from "./data";
import { formConfig } from "./data";
import {
  FormWrapper,
  FormContainer,
  EducationSection,
  EducationGrid,
  FormGroup,
  Input,
  Select,
  Label,
  SectionTitle,
  ErrorMessage,
  SubmitButton,
  StatusMessage,
} from "./styledComponents";

const EducationDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: formConfig.defaultValues,
  });

  const [formState, setFormState] = React.useState({
    status: {
      message: "",
      type: "",
      lastSaved: "",
    },
  });

  const yearOptions = React.useMemo(() => generateYearOptions(), []);

  const optionsMap = React.useMemo(
    () => ({
      boardOptions,
      marksTypeOptions,
      graduationTypeOptions,
      yearOptions,
    }),
    [yearOptions]
  );

  const getOptionsForField = React.useCallback(
    (optionsName) => optionsMap[optionsName] || [],
    [optionsMap]
  );

  const handleFormSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Data Submitted:", data);

      setFormState((prev) => ({
        ...prev,
        status: {
          message: "Successfully saved education details!",
          type: "success",
          lastSaved: new Date().toLocaleString(),
        },
      }));
    } catch (error) {
      console.error("Submission Error:", error);
      setFormState((prev) => ({
        ...prev,
        status: {
          message: "Error saving education details",
          type: "error",
          lastSaved: "",
        },
      }));
    }
  };

  const renderField = React.useCallback(
    (field, section) => (
      <FormGroup key={field.name}>
        <Label htmlFor={`${section}.${field.name}`}>{field.label}</Label>
        {field.type === "select" ? (
          <Select
            id={`${section}.${field.name}`}
            $hasError={!!errors[section]?.[field.name]}
            {...register(`${section}.${field.name}`, {
              required: field.required,
              validate: field.validate,
            })}
          >
            <option value="">{`Select ${field.label}`}</option>
            {getOptionsForField(field.options).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        ) : (
          <Input
            id={`${section}.${field.name}`}
            type={field.type}
            $hasError={!!errors[section]?.[field.name]}
            {...register(`${section}.${field.name}`, {
              required: field.required,
              maxLength: field.maxLength,
              validate: field.validate,
            })}
            step={field.type === "number" ? "0.01" : undefined}
          />
        )}
        {errors[section]?.[field.name] && (
          <ErrorMessage role="alert">
            {errors[section][field.name].message}
          </ErrorMessage>
        )}
      </FormGroup>
    ),
    [errors, getOptionsForField, register]
  );

  const renderEducationSection = React.useCallback(
    (title, section) => (
      <EducationSection key={section}>
        <SectionTitle>{title}</SectionTitle>
        <EducationGrid>
          {formFields[section].map((field) => renderField(field, section))}
        </EducationGrid>
      </EducationSection>
    ),
    [renderField]
  );

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        {Object.entries(formConfig.sections).map(([section, title]) =>
          renderEducationSection(title, section)
        )}

        {formState.status.message && (
          <StatusMessage $type={formState.status.type} role="status">
            {formState.status.message}
          </StatusMessage>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Education Details"}
        </SubmitButton>

        {formState.status.lastSaved && (
          <StatusMessage $type="info">
            Last saved: {formState.status.lastSaved}
          </StatusMessage>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default EducationDetails;
