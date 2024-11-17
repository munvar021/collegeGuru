import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { stateOptions, FORM_VALIDATION_RULES } from "./data";
import {
  FormWrapper,
  FormContainer,
  FormTitle,
  FormGroup,
  Input,
  Label,
  ErrorMessage,
  SubmitButton,
  StatusMessage,
  LastSaved,
} from "./styledComponents";

const ContactDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      mobile: "",
      email: "",
      city: "",
      state: null,
    },
  });

  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [lastSuccessfulSubmission, setLastSuccessfulSubmission] =
    React.useState(null);

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 10) {
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    return digits.slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  const simulateApiCall = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Contact details saved successfully",
        });
      }, 1500);
    });
  };

  const onSubmit = async (data) => {
    try {
      await simulateApiCall(data);
      setSubmitStatus("success");
      setLastSuccessfulSubmission(new Date().toISOString());
      console.log("Successful Submission:", data);
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <FormWrapper>
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
        role="form"
        aria-label="Contact Details Form"
      >
        <FormTitle>Contact Details</FormTitle>

        <FormGroup>
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Controller
            name="mobile"
            control={control}
            rules={FORM_VALIDATION_RULES.mobile}
            render={({ field }) => (
              <Input
                {...field}
                id="mobile"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                $hasError={!!errors.mobile}
                aria-invalid={!!errors.mobile}
                onChange={(e) =>
                  field.onChange(formatPhoneNumber(e.target.value))
                }
                maxLength={12}
              />
            )}
          />
          {errors.mobile && (
            <ErrorMessage role="alert">{errors.mobile.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address *</Label>
          <Controller
            name="email"
            control={control}
            rules={FORM_VALIDATION_RULES.email}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Enter your email address"
                $hasError={!!errors.email}
                aria-invalid={!!errors.email}
                maxLength={100}
              />
            )}
          />
          {errors.email && (
            <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City *</Label>
          <Controller
            name="city"
            control={control}
            rules={FORM_VALIDATION_RULES.city}
            render={({ field }) => (
              <Input
                {...field}
                id="city"
                type="text"
                placeholder="Enter your city"
                $hasError={!!errors.city}
                aria-invalid={!!errors.city}
                maxLength={50}
              />
            )}
          />
          {errors.city && (
            <ErrorMessage role="alert">{errors.city.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="state">State *</Label>
          <Controller
            name="state"
            control={control}
            rules={FORM_VALIDATION_RULES.state}
            render={({ field }) => (
              <Select
                {...field}
                id="state"
                options={stateOptions}
                $hasError={!!errors.state}
                aria-invalid={!!errors.state}
                isClearable
                isSearchable
                placeholder="Select State"
                noOptionsMessage={() => "No state found"}
              />
            )}
          />
          {errors.state && (
            <ErrorMessage role="alert">{errors.state.message}</ErrorMessage>
          )}
        </FormGroup>

        {submitStatus && (
          <StatusMessage role="alert" $type={submitStatus}>
            {submitStatus === "success"
              ? "Contact details saved successfully!"
              : "An error occurred while saving contact details. Please try again."}
          </StatusMessage>
        )}

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Saving Changes..." : "Save Changes"}
        </SubmitButton>

        {lastSuccessfulSubmission && (
          <LastSaved>
            Last saved: {new Date(lastSuccessfulSubmission).toLocaleString()}
          </LastSaved>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default ContactDetails;
