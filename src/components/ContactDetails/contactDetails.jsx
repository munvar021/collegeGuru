import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { FiEdit2 } from "react-icons/fi";
import { contactFormFields, states, citiesByState } from "./data";
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
  Input,
  Error,
  ButtonGroup,
  Button,
  SelectWrapper,
  EditButton,
} from "./styledComponents";

const ContactDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    contactFormFields.forEach((field) => {
      initialData[field.id] = field.defaultValue || "";
    });
    return initialData;
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: formData,
  });

  const selectedState = watch("state");
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      setAvailableCities(citiesByState[selectedState.value] || []);
    }
  }, [selectedState]);

  const onSubmit = (data) => {
    const formattedData = {};
    Object.keys(data).forEach((key) => {
      formattedData[key] = data[key]?.label || data[key];
    });

    console.log("Contact Details Form Submitted:", {
      rawData: data,
      formattedData: formattedData,
      timestamp: new Date().toISOString(),
    });

    setFormData(formattedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("Contact Details Edit Cancelled:", {
      timestamp: new Date().toISOString(),
    });
    reset(formData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    console.log("Contact Details Edit Mode Activated:", {
      timestamp: new Date().toISOString(),
    });
    setIsEditing(true);
  };

  const renderField = (field) => (
    <Field key={field.id}>
      <Label>{field.label}</Label>
      <Value>{formData[field.id] || "N/A"}</Value>
    </Field>
  );

  const renderFormField = (field) => (
    <FormGroup key={field.id}>
      <Label>{field.label}</Label>
      {field.type === "select" ? (
        <Controller
          name={field.id}
          control={control}
          rules={field.validation}
          render={({ field: { onChange, value } }) => (
            <SelectWrapper>
              <Select
                options={field.id === "state" ? states : availableCities}
                value={value}
                onChange={onChange}
                isSearchable
                className="react-select"
                classNamePrefix="react-select"
                placeholder={`Select ${field.label}`}
                isDisabled={field.id === "city" && !selectedState}
              />
            </SelectWrapper>
          )}
        />
      ) : (
        <Input type={field.type} {...register(field.id, field.validation)} />
      )}
      {errors[field.id] && <Error>{errors[field.id].message}</Error>}
    </FormGroup>
  );

  return (
    <Container>
      <Card>
        <Header>
          <Title>Contact Details</Title>
          {!isEditing && (
            <EditButton
              onClick={handleEditClick}
              aria-label="Edit contact details"
            >
              <FiEdit2 />
            </EditButton>
          )}
        </Header>

        {!isEditing ? (
          <Grid>{contactFormFields.map(renderField)}</Grid>
        ) : (
          <Modal>
            <ModalContent>
              <Title>Edit Contact Details</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {contactFormFields.map(renderFormField)}
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

export default ContactDetails;
