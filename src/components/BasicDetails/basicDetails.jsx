import React from 'react';
import {
  FormContainer,
  FormGroup,
  Input,
  Select,
  Label,
  ErrorText,
  SubmitButton,
  FormTitle,
  FormWrapper,
  FormGrid
} from './styledComponents';

const BasicDetails = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    socialCategory: '',
    physicallyChallengd: 'no'
  });

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  const validateField = (name, value) => {
    if (!value || value.trim() === '') {
      return `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Basic Details</FormTitle>
        
        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              $hasError={touched.name && errors.name}
            />
            {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.dateOfBirth && errors.dateOfBirth}
            />
            {touched.dateOfBirth && errors.dateOfBirth && <ErrorText>{errors.dateOfBirth}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.gender && errors.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
            {touched.gender && errors.gender && <ErrorText>{errors.gender}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="socialCategory">Social Category</Label>
            <Select
              id="socialCategory"
              name="socialCategory"
              value={formData.socialCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.socialCategory && errors.socialCategory}
            >
              <option value="">Select Category</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </Select>
            {touched.socialCategory && errors.socialCategory && <ErrorText>{errors.socialCategory}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="physicallyChallengd">Physically Challenged</Label>
            <Select
              id="physicallyChallengd"
              name="physicallyChallengd"
              value={formData.physicallyChallengd}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Select>
          </FormGroup>
        </FormGrid>

        <SubmitButton type="submit">
          Save Changes
        </SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default BasicDetails;