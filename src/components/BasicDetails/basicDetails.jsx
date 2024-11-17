import React from "react";
import { useForm } from "react-hook-form";
import {
  GENDER_OPTIONS,
  SOCIAL_CATEGORY_OPTIONS,
  PHYSICALLY_CHALLENGED_OPTIONS,
  FORM_VALIDATION_RULES,
} from "./data";
import {
  FormWrapper,
  FormContainer,
  FormTitle,
  FormGrid,
  FormGroup,
  Label,
  Input,
  Select,
  ErrorText,
  SubmitButton,
  StatusMessage,
} from "./styledComponents";

const BasicDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      dateOfBirth: "",
      gender: "",
      socialCategory: "",
      physicallyChallengd: "no",
      email: "",
    },
    mode: "onBlur",
  });

  const [formStatus, setFormStatus] = React.useState({
    type: null,
    message: "",
  });

  const simulateApiCall = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Data saved successfully" });
      }, 1500);
    });
  };

  const onSubmit = async (data) => {
    try {
      await simulateApiCall(data);
      setFormStatus({
        type: "success",
        message: "Form submitted successfully!",
      });
      console.log("Form submitted successfully. Updated data:", data);
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "An error occurred while submitting the form. Please try again.",
      });
    }
  };

  return (
    <FormWrapper>
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
        role="form"
        aria-label="Basic Details Form"
      >
        <FormTitle>Basic Details</FormTitle>

        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              {...register("name", FORM_VALIDATION_RULES.name)}
              placeholder="Enter your full name"
              $hasError={errors.name}
              aria-invalid={!!errors.name}
              maxLength={50}
            />
            {errors.name && (
              <ErrorText role="alert">{errors.name.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register("email", FORM_VALIDATION_RULES.email)}
              placeholder="Enter your email"
              $hasError={errors.email}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <ErrorText role="alert">{errors.email.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...register("dateOfBirth", FORM_VALIDATION_RULES.dateOfBirth)}
              $hasError={errors.dateOfBirth}
              aria-invalid={!!errors.dateOfBirth}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors.dateOfBirth && (
              <ErrorText role="alert">{errors.dateOfBirth.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Gender *</Label>
            <Select
              id="gender"
              {...register("gender", FORM_VALIDATION_RULES.gender)}
              $hasError={errors.gender}
              aria-invalid={!!errors.gender}
            >
              {GENDER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {errors.gender && (
              <ErrorText role="alert">{errors.gender.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="socialCategory">Social Category *</Label>
            <Select
              id="socialCategory"
              {...register(
                "socialCategory",
                FORM_VALIDATION_RULES.socialCategory
              )}
              $hasError={errors.socialCategory}
              aria-invalid={!!errors.socialCategory}
            >
              {SOCIAL_CATEGORY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {errors.socialCategory && (
              <ErrorText role="alert">
                {errors.socialCategory.message}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="physicallyChallengd">Physically Challenged</Label>
            <Select
              id="physicallyChallengd"
              {...register("physicallyChallengd")}
              aria-required="false"
            >
              {PHYSICALLY_CHALLENGED_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormGroup>
        </FormGrid>

        {formStatus.type && (
          <StatusMessage className={formStatus.type} role="alert">
            {formStatus.message}
          </StatusMessage>
        )}

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Saving Changes..." : "Save Changes"}
        </SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default BasicDetails;
