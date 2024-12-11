import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { FiEdit2 } from "react-icons/fi";
import { educationFormFields } from "./data";
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
  SectionTitle,
  Divider,
  EditButton,
} from "./styledComponents";

const EducationDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    classX: {},
    classXII: {},
    graduation: {},
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
    const formattedData = Object.keys(data).reduce((acc, section) => {
      acc[section] = Object.keys(data[section]).reduce((sectionAcc, field) => {
        const value = data[section][field];
        sectionAcc[field] = value?.label || value;
        return sectionAcc;
      }, {});
      return acc;
    }, {});

    console.log("Education Details Form Submitted:", {
      rawData: data,
      formattedData: formattedData,
      timestamp: new Date().toISOString(),
      section: "education",
    });

    setFormData(formattedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("Education Details Edit Cancelled:", {
      timestamp: new Date().toISOString(),
      section: "education",
    });
    reset(formData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    console.log("Education Details Edit Mode Activated:", {
      timestamp: new Date().toISOString(),
      section: "education",
      currentData: formData,
    });
    setIsEditing(true);
  };

  const renderField = (section, field) => (
    <Field key={field.id}>
      <Label>{field.label}</Label>
      <Value>{formData[section]?.[field.id] || "N/A"}</Value>
    </Field>
  );

  const renderFormField = (section, field) => (
    <FormGroup key={field.id}>
      <Label>{field.label}</Label>
      {field.type === "select" ? (
        <Controller
          name={`${section}.${field.id}`}
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
        <Input
          type={field.type}
          {...register(`${section}.${field.id}`, field.validation)}
        />
      )}
      {errors[section]?.[field.id] && (
        <Error>{errors[section][field.id].message}</Error>
      )}
    </FormGroup>
  );

  const renderSection = (section, title, fields) => (
    <div key={section}>
      <SectionTitle>{title}</SectionTitle>
      <Grid>
        {!isEditing
          ? fields.map((field) => renderField(section, field))
          : fields.map((field) => renderFormField(section, field))}
      </Grid>
      {section !== "graduation" && <Divider />}
    </div>
  );

  return (
    <Container>
      <Card>
        <Header>
          <Title>Education Details</Title>
          {!isEditing && (
            <EditButton
              onClick={handleEditClick}
              aria-label="Edit education details"
            >
              <FiEdit2 />
            </EditButton>
          )}
        </Header>

        {!isEditing ? (
          <>
            {renderSection("classX", "Class X", educationFormFields.classX)}
            {renderSection(
              "classXII",
              "Class XII",
              educationFormFields.classXII
            )}
            {renderSection(
              "graduation",
              "Graduation",
              educationFormFields.graduation
            )}
          </>
        ) : (
          <Modal>
            <ModalContent>
              <Title>Edit Education Details</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {renderSection("classX", "Class X", educationFormFields.classX)}
                {renderSection(
                  "classXII",
                  "Class XII",
                  educationFormFields.classXII
                )}
                {renderSection(
                  "graduation",
                  "Graduation",
                  educationFormFields.graduation
                )}
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

export default EducationDetails;
