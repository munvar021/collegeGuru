import React from 'react';
import {
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
  FormWrapper
} from './styledComponents';

const EducationDetails = () => {
  const [formData, setFormData] = React.useState({
    class_x: {
      board: '',
      school: '',
      passingYear: '',
      marksType: '',
      percentage: ''
    },
    class_xii: {
      board: '',
      school: '',
      passingYear: '',
      marksType: '',
      percentage: ''
    },
    graduation: {
      college: '',
      passingYear: '',
      degree: '',
      marksType: '',
      percentage: ''
    }
  });

  const [errors, setErrors] = React.useState({
    class_x: {},
    class_xii: {},
    graduation: {}
  });

  const [touched, setTouched] = React.useState({
    class_x: {},
    class_xii: {},
    graduation: {}
  });

  const validateField = (value, fieldName) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    if (fieldName === 'Percentage/CGPA') {
      const numValue = parseFloat(value);
      if (isNaN(numValue) || numValue < 0 || numValue > 100) {
        return 'Please enter a valid percentage between 0 and 100';
      }
    }
    return '';
  };

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));

    if (touched[section][field]) {
      setErrors(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: validateField(value, field)
        }
      }));
    }
  };

  const handleBlur = (section, field, value) => {
    setTouched(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: true
      }
    }));

    setErrors(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: validateField(value, field)
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { class_x: {}, class_xii: {}, graduation: {} };
    let hasErrors = false;

    // Validate all fields
    Object.keys(formData).forEach(section => {
      Object.keys(formData[section]).forEach(field => {
        const error = validateField(formData[section][field], field);
        if (error) {
          newErrors[section][field] = error;
          hasErrors = true;
        }
      });
    });

    setErrors(newErrors);
    setTouched({
      class_x: { board: true, school: true, passingYear: true, marksType: true, percentage: true },
      class_xii: { board: true, school: true, passingYear: true, marksType: true, percentage: true },
      graduation: { college: true, degree: true, passingYear: true, marksType: true, percentage: true }
    });

    if (!hasErrors) {
      console.log(formData);
    }
  };

  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

  const renderEducationSection = (title, section, fields) => (
    <EducationSection>
      <SectionTitle>{title}</SectionTitle>
      <EducationGrid>
        {fields.map(field => (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            {field.type === 'select' ? (
              <Select
                value={formData[section][field.name]}
                onChange={(e) => handleChange(section, field.name, e.target.value)}
                onBlur={(e) => handleBlur(section, field.name, e.target.value)}
                $hasError={touched[section]?.[field.name] && errors[section]?.[field.name]}
              >
                <option value="">{`Select ${field.label}`}</option>
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                type={field.type}
                value={formData[section][field.name]}
                onChange={(e) => handleChange(section, field.name, e.target.value)}
                onBlur={(e) => handleBlur(section, field.name, e.target.value)}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                $hasError={touched[section]?.[field.name] && errors[section]?.[field.name]}
                step={field.type === 'number' ? "0.01" : undefined}
              />
            )}
            {touched[section]?.[field.name] && errors[section]?.[field.name] && (
              <ErrorMessage>{errors[section][field.name]}</ErrorMessage>
            )}
          </FormGroup>
        ))}
      </EducationGrid>
    </EducationSection>
  );

  const boardOptions = [
    { value: 'cbse', label: 'CBSE' },
    { value: 'icse', label: 'ICSE' },
    { value: 'state', label: 'State Board' }
  ];

  const marksTypeOptions = [
    { value: 'percentage', label: 'Percentage' },
    { value: 'cgpa', label: 'CGPA' }
  ];

  const yearOptions = years.map(year => ({ value: year.toString(), label: year.toString() }));

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        {renderEducationSection('Class X Details', 'class_x', [
          { name: 'board', label: 'Board', type: 'select', options: boardOptions },
          { name: 'school', label: 'School Name', type: 'text' },
          { name: 'passingYear', label: 'Passing Year', type: 'select', options: yearOptions },
          { name: 'marksType', label: 'Marks Type', type: 'select', options: marksTypeOptions },
          { name: 'percentage', label: 'Percentage/CGPA', type: 'number' }
        ])}

        {renderEducationSection('Class XII Details', 'class_xii', [
          { name: 'board', label: 'Board', type: 'select', options: boardOptions },
          { name: 'school', label: 'School Name', type: 'text' },
          { name: 'passingYear', label: 'Passing Year', type: 'select', options: yearOptions },
          { name: 'marksType', label: 'Marks Type', type: 'select', options: marksTypeOptions },
          { name: 'percentage', label: 'Percentage/CGPA', type: 'number' }
        ])}

        {renderEducationSection('Graduation Details', 'graduation', [
          { name: 'college', label: 'College Name', type: 'text' },
          { name: 'degree', label: 'Degree', type: 'text' },
          { name: 'passingYear', label: 'Passing Year', type: 'select', options: yearOptions },
          { name: 'marksType', label: 'Marks Type', type: 'select', options: marksTypeOptions },
          { name: 'percentage', label: 'Percentage/CGPA', type: 'number' }
        ])}

        <SubmitButton type="submit">
          Save Education Details
        </SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default EducationDetails;