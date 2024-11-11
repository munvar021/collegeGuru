import React from 'react';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Input,
  Select,
  Label,
  ErrorMessage,
  SubmitButton,
  FormWrapper
} from './styledComponents';

const ContactDetails = () => {
  const [formData, setFormData] = React.useState({
    mobile: '',
    email: '',
    city: '',
    state: ''
  });

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    
    if (name === 'email' && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (name === 'mobile' && value.trim()) {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value.replace(/\D/g, ''))) {
        return 'Please enter a valid 10-digit mobile number';
      }
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
    
    // Validate all fields
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
      console.log(formData);
    }
  };

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Contact Details</FormTitle>
        <FormGroup>
          <Label>Mobile Number</Label>
          <Input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your mobile number"
            $hasError={touched.mobile && errors.mobile}
          />
          {touched.mobile && errors.mobile && (
            <ErrorMessage>{errors.mobile}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email address"
            $hasError={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your city"
            $hasError={touched.city && errors.city}
          />
          {touched.city && errors.city && (
            <ErrorMessage>{errors.city}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>State</Label>
          <Select 
            name="state" 
            value={formData.state} 
            onChange={handleChange}
            onBlur={handleBlur}
            $hasError={touched.state && errors.state}
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
          {touched.state && errors.state && (
            <ErrorMessage>{errors.state}</ErrorMessage>
          )}
        </FormGroup>

        <SubmitButton type="submit">
          Save Changes
        </SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default ContactDetails;