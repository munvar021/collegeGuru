import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { NOTIFICATION_OPTIONS, FORM_VALIDATION_MESSAGES } from "./data";
import {
  FormContainer,
  MainSection,
  Title,
  Subtitle,
  NotificationOptions,
  ToggleOption,
  ToggleLabel,
  ToggleSwitch,
  ErrorMessage,
  TextArea,
  SubmitButton,
} from "./styledComponents";

const Settings = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      email: false,
      sms: false,
      whatsapp: false,
      concern: "",
    },
  });

  const notificationValues = watch(["email", "sms", "whatsapp"]);

  const onSubmit = async (data) => {
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const validateNotifications = () => {
    return (
      notificationValues.some((value) => value) ||
      FORM_VALIDATION_MESSAGES.notifications
    );
  };

  return (
    <FormContainer as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <MainSection>
        <header>
          <Title>Notification & Reminders</Title>
          <Subtitle>
            Never miss important reminders & notifications about the latest
            education news and your admission journey status
          </Subtitle>
        </header>

        <NotificationOptions>
          {NOTIFICATION_OPTIONS.map(({ id, label }) => (
            <ToggleOption key={id}>
              <ToggleLabel htmlFor={id}>{label}</ToggleLabel>
              <Controller
                name={id}
                control={control}
                rules={{ validate: validateNotifications }}
                render={({ field: { value, onChange } }) => (
                  <ToggleSwitch id={id} checked={value} onChange={onChange} />
                )}
              />
            </ToggleOption>
          ))}
        </NotificationOptions>
        {errors.email?.message && (
          <ErrorMessage>{FORM_VALIDATION_MESSAGES.notifications}</ErrorMessage>
        )}
      </MainSection>

      <MainSection>
        <Title as="h2">Report an Issue</Title>
        <Controller
          name="concern"
          control={control}
          rules={{ required: FORM_VALIDATION_MESSAGES.concern }}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="What is your concern?"
              error={!!errors.concern}
            />
          )}
        />
        {errors.concern && (
          <ErrorMessage>{errors.concern.message}</ErrorMessage>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitButton>
      </MainSection>
    </FormContainer>
  );
};

export default Settings;
