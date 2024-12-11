import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { FiEdit2 } from "react-icons/fi";
import { formFields } from "./data";
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

const BasicDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    formFields.forEach((field) => {
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
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    const formattedData = {};
    Object.keys(data).forEach((key) => {
      formattedData[key] = data[key]?.label || data[key];
    });

    console.log("Basic Details Form Submitted:", {
      rawData: data,
      formattedData: formattedData,
      timestamp: new Date().toISOString(),
    });

    setFormData(formattedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("Basic Details Edit Cancelled:", {
      timestamp: new Date().toISOString(),
    });
    reset(formData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    console.log("Basic Details Edit Mode Activated:", {
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
          <Title>Basic Details</Title>
          {!isEditing && (
            <EditButton
              onClick={handleEditClick}
              aria-label="Edit basic details"
            >
              <FiEdit2 />
            </EditButton>
          )}
        </Header>

        {!isEditing ? (
          <Grid>{formFields.map(renderField)}</Grid>
        ) : (
          <Modal>
            <ModalContent>
              <Title>Edit Basic Details</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {formFields.map(renderFormField)}
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

export default BasicDetails;
