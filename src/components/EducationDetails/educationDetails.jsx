import React from 'react';
import {boardOptions, marksTypeOptions, graduationTypeOptions} from './data';
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
      graduationType: '',
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

  const [isLoading, setIsLoading] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');
  const [lastSaved, setLastSaved] = React.useState('');

  const validateField = (value, fieldName, fieldType = 'text') => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }

    switch (fieldType) {
      case 'number':
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue < 0 || numValue > 100) {
          return 'Please enter a valid percentage between 0 and 100';
        }
        break;
      case 'text':
        if (value.length > 100) {
          return `${fieldName} must be less than 100 characters`;
        }
        break;
      default:
        if (value.length > 100) {
          return `${fieldName} must be less than 100 characters`;
        }
        break;
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
          [field]: validateField(value, field, field === 'percentage' ? 'number' : 'text')
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
        [field]: validateField(value, field, field === 'percentage' ? 'number' : 'text')
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { class_x: {}, class_xii: {}, graduation: {} };
    let hasErrors = false;

    Object.keys(formData).forEach(section => {
      Object.keys(formData[section]).forEach(field => {
        const error = validateField(
          formData[section][field], 
          field,
          field === 'percentage' ? 'number' : 'text'
        );
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
      graduation: { college: true, degree: true, graduationType: true, passingYear: true, marksType: true, percentage: true }
    });

    if (!hasErrors) {
      setIsLoading(true);
      setSubmitStatus('');
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form Data Submitted:', formData);
        
        setSubmitStatus('success');
        setLastSaved(new Date().toLocaleString());
      } catch (error) {
        console.error('Submission Error:', error);
        setSubmitStatus('error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

  const renderEducationSection = (title, section, fields) => (
    <EducationSection>
      <SectionTitle>{title}</SectionTitle>
      <EducationGrid>
        {fields.map(field => (
          <FormGroup key={field.name}>
            <Label htmlFor={`${section}-${field.name}`}>{field.label}</Label>
            {field.type === 'select' ? (
              <Select
                id={`${section}-${field.name}`}
                value={formData[section][field.name]}
                onChange={(e) => handleChange(section, field.name, e.target.value)}
                onBlur={(e) => handleBlur(section, field.name, e.target.value)}
                $hasError={touched[section]?.[field.name] && errors[section]?.[field.name]}
                aria-invalid={!!(touched[section]?.[field.name] && errors[section]?.[field.name])}
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
                id={`${section}-${field.name}`}
                type={field.type}
                value={formData[section][field.name]}
                onChange={(e) => handleChange(section, field.name, e.target.value)}
                onBlur={(e) => handleBlur(section, field.name, e.target.value)}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                $hasError={touched[section]?.[field.name] && errors[section]?.[field.name]}
                aria-invalid={!!(touched[section]?.[field.name] && errors[section]?.[field.name])}
                step={field.type === 'number' ? "0.01" : undefined}
                maxLength={field.type === 'text' ? 100 : undefined}
              />
            )}
            {touched[section]?.[field.name] && errors[section]?.[field.name] && (
              <ErrorMessage role="alert">{errors[section][field.name]}</ErrorMessage>
            )}
          </FormGroup>
        ))}
      </EducationGrid>
    </EducationSection>
  );

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
          { name: 'graduationType', label: 'Degree Level', type: 'select', options: graduationTypeOptions },
          { name: 'college', label: 'College Name', type: 'text' },
          { name: 'degree', label: 'Degree', type: 'text' },
          { name: 'passingYear', label: 'Passing Year', type: 'select', options: yearOptions },
          { name: 'marksType', label: 'Marks Type', type: 'select', options: marksTypeOptions },
          { name: 'percentage', label: 'Percentage/CGPA', type: 'number' }
        ])}

        {submitStatus === 'success' && (
          <div className="text-green-600 text-center mb-4" role="status">
            Successfully saved education details!
          </div>
        )}

        <SubmitButton 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        >
          {isLoading ? 'Saving...' : 'Save Education Details'}
        </SubmitButton>

        {lastSaved && (
          <div className="text-gray-600 text-sm text-center mt-2">
            Last saved: {lastSaved}
          </div>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default EducationDetails;