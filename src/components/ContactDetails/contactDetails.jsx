import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {stateOptions} from './data';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Input,
  Label,
  ErrorMessage,
  SubmitButton,
  FormWrapper
} from './styledComponents';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    city: '',
    state: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSuccessfulSubmission, setLastSuccessfulSubmission] = useState(null);

  useEffect(() => {
    if (submitStatus === 'success') {
      console.log('Updated Form Data:', formData);
    }
  }, [submitStatus, formData]);

  const validateField = (name, value) => {
    if (!value || !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        if (value.length > 100) {
          return 'Email address is too long (maximum 100 characters)';
        }
        break;

      case 'mobile':
        const phoneRegex = /^\d{10}$/;
        const digitsOnly = value.replace(/\D/g, '');
        if (!phoneRegex.test(digitsOnly)) {
          return 'Please enter a valid 10-digit mobile number';
        }
        break;

      case 'city':
        if (!/^[a-zA-Z\s]{2,50}$/.test(value.trim())) {
          return 'City name should only contain letters and spaces (2-50 characters)';
        }
        break;

      case 'state':
        if (!value) {
          return 'Please select a valid state';
        }
        break;

      default:
        break;
    }
    return '';
  };

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 10) {
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return digits.slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  const handleChange = (e, name) => {
    let formattedValue = e.value;
    
    if (name === 'mobile') {
      formattedValue = formatPhoneNumber(e.target.value);
    } else if (name === 'state') {
      formattedValue = e?.value || null;
    } else {
      formattedValue = e.target.value.trim();
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    if (touched[name]) {
      const error = validateField(name, formattedValue);
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
        resolve({ success: true, message: 'Contact details saved successfully' });
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      mobile: true,
      email: true,
      city: true,
      state: true
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await simulateApiCall(formData);
        setSubmitStatus('success');
        setLastSuccessfulSubmission(new Date().toISOString());
        console.log('Successful Submission:', formData);
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit} role="form" aria-label="Contact Details Form">
        <FormTitle>Contact Details</FormTitle>
        
        <FormGroup>
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => handleChange(e, 'mobile')}
            onBlur={handleBlur}
            placeholder="Enter 10-digit mobile number"
            $hasError={touched.mobile && errors.mobile}
            aria-required="true"
            aria-invalid={!!errors.mobile}
            maxLength={12}
          />
          {touched.mobile && errors.mobile && (
            <ErrorMessage role="alert">{errors.mobile}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
            onBlur={handleBlur}
            placeholder="Enter your email address"
            $hasError={touched.email && errors.email}
            aria-required="true"
            aria-invalid={!!errors.email}
            maxLength={100}
          />
          {touched.email && errors.email && (
            <ErrorMessage role="alert">{errors.email}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={(e) => handleChange(e, 'city')}
            onBlur={handleBlur}
            placeholder="Enter your city"
            $hasError={touched.city && errors.city}
            aria-required="true"
            aria-invalid={!!errors.city}
            maxLength={50}
          />
          {touched.city && errors.city && (
            <ErrorMessage role="alert">{errors.city}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="state">State *</Label>
          <Select
            id="state"
            name="state"
            options={stateOptions}
            value={formData.state}
            onChange={(e) => handleChange(e, 'state')}
            onBlur={handleBlur}
            $hasError={touched.state && errors.state}
            aria-required="true"
            aria-invalid={!!errors.state}
            isClearable
            isSearchable
            placeholder="Select State"
            noOptionsMessage={() => 'No state found'}
          />
          {touched.state && errors.state && (
            <ErrorMessage role="alert">{errors.state}</ErrorMessage>
          )}
        </FormGroup>

        {submitStatus === 'success' && (
          <div role="alert" style={{ color: '#059669', marginTop: '1rem' }}>
            Contact details saved successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div role="alert" style={{ color: '#DC2626', marginTop: '1rem' }}>
            An error occurred while saving contact details. Please try again.
          </div>
        )}

        <SubmitButton 
          type="submit" 
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
        </SubmitButton>

        {lastSuccessfulSubmission && (
          <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.5rem', textAlign: 'center' }}>
            Last saved: {new Date(lastSuccessfulSubmission).toLocaleString()}
          </div>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default ContactDetails;