import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { FiEdit2 } from "react-icons/fi";
import { preferencesFormFields } from "./data";
import {
  Container,
  Card,
  Header,
  Title,
  Grid,
  Field,
  Label,
  Value,
  Modal,
  ModalContent,
  Form,
  FormGroup,
  Error,
  ButtonGroup,
  Button,
  EditButton,
  SelectWrapper,
} from "./styledComponents";

const Preferences = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    preferencesFormFields.forEach((field) => {
      initialData[field.id] = field.defaultValue || "";
    });
    return initialData;
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    console.log("Preferences Form Submitted:", {
      rawData: data,
      formattedData: Object.keys(data).reduce((acc, key) => {
        acc[key] = data[key]?.label || data[key];
        return acc;
      }, {}),
      timestamp: new Date().toISOString(),
    });

    setFormData(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("Preferences Edit Cancelled:", {
      timestamp: new Date().toISOString(),
    });
    reset(formData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    console.log("Preferences Edit Mode Activated:", {
      timestamp: new Date().toISOString(),
    });
    setIsEditing(true);
  };

  const renderField = (field) => (
    <Field key={field.id}>
      <Label>{field.label}</Label>
      <Value>{formData[field.id]?.label || "N/A"}</Value>
    </Field>
  );

  const renderFormField = (field) => (
    <FormGroup key={field.id}>
      <Label>{field.label}</Label>
      <Controller
        name={field.id}
        control={control}
        rules={field.validation}
        render={({ field: { onChange, value } }) => (
          <SelectWrapper>
            <Select
              options={field.options}
              value={value}
              onChange={onChange}
              isSearchable
              className="react-select"
              classNamePrefix="react-select"
              placeholder={`Select ${field.label}`}
            />
          </SelectWrapper>
        )}
      />
      {errors[field.id] && <Error>{errors[field.id].message}</Error>}
    </FormGroup>
  );

  return (
    <Container>
      <Card>
        <Header>
          <Title>Preferences</Title>
          {!isEditing && (
            <EditButton onClick={handleEditClick} aria-label="Edit preferences">
              <FiEdit2 />
            </EditButton>
          )}
        </Header>

        {!isEditing ? (
          <Grid>{preferencesFormFields.map(renderField)}</Grid>
        ) : (
          <Modal>
            <ModalContent>
              <Title>Edit Preferences</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {preferencesFormFields.map(renderFormField)}
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </ButtonGroup>
              </Form>
            </ModalContent>
          </Modal>
        )}
      </Card>
    </Container>
  );
};

export default Preferences;
