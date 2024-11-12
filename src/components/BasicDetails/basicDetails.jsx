import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    socialCategory: '',
    physicallyChallengd: 'no',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    
    if (!value || value.trim() === '') {
      error = `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
    } else {
      switch (name) {
        case 'name':
          if (value.length < 2) {
            error = 'Name must be at least 2 characters long';
          } else if (value.length > 50) {
            error = 'Name cannot exceed 50 characters';
          } else if (!/^[a-zA-Z\s]*$/.test(value)) {
            error = 'Name can only contain letters and spaces';
          }
          break;
        
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Please enter a valid email address';
          }
          break;
        
        case 'dateOfBirth':
          const date = new Date(value);
          const today = new Date();
          if (date > today) {
            error = 'Date of birth cannot be in the future';
          }
          break;
          
        default:
          break;
      }
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const simulateApiCall = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Data saved successfully' });
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await simulateApiCall(formData);
        setSubmitStatus('success');
        console.log('Form submitted successfully. Updated data:', formData);
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit} role="form" aria-label="Basic Details Form">
        <FormTitle>Basic Details</FormTitle>
        
        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              $hasError={touched.name && errors.name}
              aria-required="true"
              aria-invalid={!!errors.name}
              maxLength={50}
            />
            {touched.name && errors.name && <ErrorText role="alert">{errors.name}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              $hasError={touched.email && errors.email}
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {touched.email && errors.email && <ErrorText role="alert">{errors.email}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.dateOfBirth && errors.dateOfBirth}
              aria-required="true"
              aria-invalid={!!errors.dateOfBirth}
              max={new Date().toISOString().split('T')[0]}
            />
            {touched.dateOfBirth && errors.dateOfBirth && <ErrorText role="alert">{errors.dateOfBirth}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Gender *</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.gender && errors.gender}
              aria-required="true"
              aria-invalid={!!errors.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
            {touched.gender && errors.gender && <ErrorText role="alert">{errors.gender}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="socialCategory">Social Category *</Label>
            <Select
              id="socialCategory"
              name="socialCategory"
              value={formData.socialCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              $hasError={touched.socialCategory && errors.socialCategory}
              aria-required="true"
              aria-invalid={!!errors.socialCategory}
            >
              <option value="">Select Category</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </Select>
            {touched.socialCategory && errors.socialCategory && 
              <ErrorText role="alert">{errors.socialCategory}</ErrorText>
            }
          </FormGroup>

          <FormGroup>
            <Label htmlFor="physicallyChallengd">Physically Challenged</Label>
            <Select
              id="physicallyChallengd"
              name="physicallyChallengd"
              value={formData.physicallyChallengd}
              onChange={handleChange}
              aria-required="false"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Select>
          </FormGroup>
        </FormGrid>

        {submitStatus === 'success' && (
          <div role="alert" style={{ color: '#059669', marginTop: '1rem' }}>
            Form submitted successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div role="alert" style={{ color: '#DC2626', marginTop: '1rem' }}>
            An error occurred while submitting the form. Please try again.
          </div>
        )}

        <SubmitButton 
          type="submit" 
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
        </SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default BasicDetails;