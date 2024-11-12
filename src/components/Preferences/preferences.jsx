import React, { useState } from 'react';
import {
  PreferenceContainer,
  PreferenceSection,
  SectionTitle,
  PreferenceGrid,
  FormGroup,
  Label,
  Select,
  Button,
  ButtonContainer,
  WarningText,
  SelectWrapper,
  FormContainer,
  LoadingOverlay,
  ErrorContainer,
  SuccessContainer,
  ValidationIcon,
  HelperText
} from './styledComponents';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    academic: {
      courseType: '',
      studyMode: '',
      preferredLocation: '',
      budgetRange: '',
      interestedFields: '',
      admissionTimeline: ''
    },
    communication: {
      preferredLanguage: '',
      communicationMode: '',
      counselingPreference: '',
      responseTime: ''
    }
  });

  const [touched, setTouched] = useState({
    academic: {},
    communication: {}
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    loading: false,
    lastSaved: null,
    message: ''
  });

  const handleChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
    setFormStatus(prev => ({
      ...prev,
      success: false,
      error: false,
      message: ''
    }));
  };

  const handleBlur = (category, field) => {
    setTouched(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: true
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus(prev => ({ ...prev, loading: true }));

    const newTouched = {
      academic: {
        courseType: true,
        studyMode: true,
        preferredLocation: true,
        budgetRange: true
      },
      communication: {
        preferredLanguage: true,
        communicationMode: true
      }
    };
    setTouched(newTouched);

    const requiredFields = {
      academic: ['courseType', 'studyMode', 'preferredLocation', 'budgetRange'],
      communication: ['preferredLanguage', 'communicationMode']
    };

    const academicEmpty = requiredFields.academic.some(
      field => !preferences.academic[field]
    );
    const communicationEmpty = requiredFields.communication.some(
      field => !preferences.communication[field]
    );

    if (academicEmpty || communicationEmpty) {
      setFormStatus({
        loading: false,
        error: true,
        success: false,
        message: 'Please fill in all required fields'
      });
      console.log('Validation failed: Required fields are empty');
      return;
    }

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const timestamp = new Date().toLocaleString();
      setFormStatus({
        success: true,
        error: false,
        loading: false,
        lastSaved: timestamp,
        message: 'Preferences saved successfully!'
      });

      console.log('User Preferences Submitted:', {
        academic: preferences.academic,
        communication: preferences.communication,
        timestamp,
        status: 'Success'
      });
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        loading: false,
        message: 'Failed to save preferences. Please try again.'
      });
    }
  };

  const handleReset = () => {
    setPreferences({
      academic: {
        courseType: '',
        studyMode: '',
        preferredLocation: '',
        budgetRange: '',
        interestedFields: '',
        admissionTimeline: ''
      },
      communication: {
        preferredLanguage: '',
        communicationMode: '',
        counselingPreference: '',
        responseTime: ''
      }
    });
    setTouched({
      academic: {},
      communication: {}
    });
    setFormStatus({
      success: false,
      error: false,
      loading: false,
      lastSaved: null,
      message: ''
    });
    console.log('Form reset to default values');
  };

  const showWarning = (category, field) => {
    return touched[category]?.[field] && !preferences[category][field];
  };

  return (
    <PreferenceContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {formStatus.loading && (
            <LoadingOverlay>
              <div>Saving preferences...</div>
            </LoadingOverlay>
          )}

          {formStatus.error && (
            <ErrorContainer>
              {formStatus.message}
            </ErrorContainer>
          )}

          {formStatus.success && (
            <SuccessContainer>
              {formStatus.message}
            </SuccessContainer>
          )}

          <PreferenceSection>
            <SectionTitle>Academic Preferences</SectionTitle>
            <PreferenceGrid>
              <FormGroup>
                <Label>Course Type</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.academic.courseType}
                    onChange={(e) => handleChange('academic', 'courseType', e.target.value)}
                    onBlur={() => handleBlur('academic', 'courseType')}
                    hasError={showWarning('academic', 'courseType')}
                  >
                    <option value="">Select Course Type</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="diploma">Diploma</option>
                    <option value="certification">Certification</option>
                  </Select>
                  {showWarning('academic', 'courseType') && (
                    <WarningText>Please select a course type</WarningText>
                  )}
                  {preferences.academic.courseType && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>

              <FormGroup>
                <Label>Study Mode</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.academic.studyMode}
                    onChange={(e) => handleChange('academic', 'studyMode', e.target.value)}
                    onBlur={() => handleBlur('academic', 'studyMode')}
                    hasError={showWarning('academic', 'studyMode')}
                  >
                    <option value="">Select Study Mode</option>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="online">Online</option>
                    <option value="hybrid">Hybrid</option>
                  </Select>
                  {showWarning('academic', 'studyMode') && (
                    <WarningText>Please select a study mode</WarningText>
                  )}
                  {preferences.academic.studyMode && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>

              <FormGroup>
                <Label>Preferred Location</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.academic.preferredLocation}
                    onChange={(e) => handleChange('academic', 'preferredLocation', e.target.value)}
                    onBlur={() => handleBlur('academic', 'preferredLocation')}
                    hasError={showWarning('academic', 'preferredLocation')}
                  >
                    <option value="">Select Location</option>
                    <option value="local">Local</option>
                    <option value="national">National</option>
                    <option value="international">International</option>
                  </Select>
                  {showWarning('academic', 'preferredLocation') && (
                    <WarningText>Please select a location</WarningText>
                  )}
                  {preferences.academic.preferredLocation && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>

              <FormGroup>
                <Label>Budget Range</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.academic.budgetRange}
                    onChange={(e) => handleChange('academic', 'budgetRange', e.target.value)}
                    onBlur={() => handleBlur('academic', 'budgetRange')}
                    hasError={showWarning('academic', 'budgetRange')}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="0-100000">Below 1 Lakh</option>
                    <option value="100000-300000">1-3 Lakhs</option>
                    <option value="300000-500000">3-5 Lakhs</option>
                    <option value="500000+">Above 5 Lakhs</option>
                  </Select>
                  {showWarning('academic', 'budgetRange') && (
                    <WarningText>Please select a budget range</WarningText>
                  )}
                  {preferences.academic.budgetRange && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>
            </PreferenceGrid>
          </PreferenceSection>

          <PreferenceSection>
            <SectionTitle>Communication Preferences</SectionTitle>
            <PreferenceGrid>
              <FormGroup>
                <Label>Preferred Language</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.communication.preferredLanguage}
                    onChange={(e) => handleChange('communication', 'preferredLanguage', e.target.value)}
                    onBlur={() => handleBlur('communication', 'preferredLanguage')}
                    hasError={showWarning('communication', 'preferredLanguage')}
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="other">Other</option>
                  </Select>
                  {showWarning('communication', 'preferredLanguage') && (
                    <WarningText>Please select a language</WarningText>
                  )}
                  {preferences.communication.preferredLanguage && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>

              <FormGroup>
                <Label>Communication Mode</Label>
                <SelectWrapper>
                  <Select
                    value={preferences.communication.communicationMode}
                    onChange={(e) => handleChange('communication', 'communicationMode', e.target.value)}
                    onBlur={() => handleBlur('communication', 'communicationMode')}
                    hasError={showWarning('communication', 'communicationMode')}
                  >
                    <option value="">Select Mode</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="chat">Chat</option>
                  </Select>
                  {showWarning('communication', 'communicationMode') && (
                    <WarningText>Please select a communication mode</WarningText>
                  )}
                  {preferences.communication.communicationMode && (
                    <ValidationIcon isValid={true}>✓</ValidationIcon>
                  )}
                </SelectWrapper>
              </FormGroup>
            </PreferenceGrid>
          </PreferenceSection>

          <ButtonContainer>
            <Button type="button" onClick={handleReset}>
              Reset Preferences
            </Button>
            <Button type="submit" disabled={formStatus.loading}>
              {formStatus.loading ? 'Saving...' : 'Save Preferences'}
            </Button>
          </ButtonContainer>

          {formStatus.lastSaved && (
            <HelperText>
              Last saved: {formStatus.lastSaved}
            </HelperText>
          )}
        </form>
      </FormContainer>
    </PreferenceContainer>
  );
};

export default Preferences;