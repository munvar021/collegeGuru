import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FormContainer, Section, Title, Subtitle, NotificationOptions, ToggleOption, ToggleLabel, ToggleSwitch, ErrorMessage, TextArea, SubmitButton } from './styledComponents';

const Settings = () => {
  const [formData, setFormData] = useState({
    email: false,
    sms: false,
    whatsapp: false,
    concern: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.concern.trim() === '') {
      newErrors.concern = 'Please describe your concern';
    }
    
    if (!formData.email && !formData.sms && !formData.whatsapp) {
      newErrors.notifications = 'Please select at least one notification method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Form submitted successfully!');
      setFormData({
        email: false,
        sms: false,
        whatsapp: false,
        concern: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    if (errors.notifications) {
      setErrors(prev => ({
        ...prev,
        notifications: ''
      }));
    }
  };

  return (
    <FormContainer>
      <Section>
        <Title>Notification & Reminders</Title>
        <Subtitle>
          Never miss important reminders & notifications about the latest education
          news and your admission journey status
        </Subtitle>
        
        <NotificationOptions>
          <ToggleOption>
            <ToggleLabel>Email</ToggleLabel>
            <ToggleSwitch
              checked={formData.email}
              onChange={() => handleToggle('email')}
            />
          </ToggleOption>
          
          <ToggleOption>
            <ToggleLabel>SMS</ToggleLabel>
            <ToggleSwitch
              checked={formData.sms}
              onChange={() => handleToggle('sms')}
            />
          </ToggleOption>
          
          <ToggleOption>
            <ToggleLabel>WhatsApp</ToggleLabel>
            <ToggleSwitch
              checked={formData.whatsapp}
              onChange={() => handleToggle('whatsapp')}
            />
          </ToggleOption>
        </NotificationOptions>
        {errors.notifications && (
          <ErrorMessage>{errors.notifications}</ErrorMessage>
        )}
      </Section>

      <Section>
        <Title>Report an Issue</Title>
        <TextArea
          placeholder="What is your concern?"
          value={formData.concern}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, concern: e.target.value }))
          }
          error={errors.concern}
        />
        {errors.concern && <ErrorMessage>{errors.concern}</ErrorMessage>}
        
        <SubmitButton 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </Section>
    </FormContainer>
  );
};

export default Settings;