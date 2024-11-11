import React, { useState } from 'react';
import {
  PreferenceContainer,
  PreferenceSection,
  SectionTitle,
  PreferenceGrid,
  FormGroup,
  Label,
  Select,
  ToggleContainer,
  ToggleSwitch,
  Button,
  ButtonContainer,
  WarningText,
  SelectWrapper
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
    notifications: {
      email: true,
      sms: true,
      applicationUpdates: true,
      promotionalOffers: false,
      deadlineReminders: true,
      documentRequests: true
    },
    communication: {
      preferredLanguage: '',
      communicationMode: '',
      counselingPreference: '',
      responseTime: ''
    },
    accessibility: {
      highContrast: false,
      largeText: false,
      screenReader: false,
      colorBlindMode: false
    }
  });

  const [touched, setTouched] = useState({
    academic: {},
    communication: {}
  });

  const handleChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
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

    // Check if required fields are filled
    const academicEmpty = Object.values(preferences.academic).some(value => !value);
    const communicationEmpty = Object.values(preferences.communication).some(value => !value);

    if (academicEmpty || communicationEmpty) {
      return;
    }

    console.log('Preferences saved:', preferences);
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
      notifications: {
        email: true,
        sms: true,
        applicationUpdates: true,
        promotionalOffers: false,
        deadlineReminders: true,
        documentRequests: true
      },
      communication: {
        preferredLanguage: '',
        communicationMode: '',
        counselingPreference: '',
        responseTime: ''
      },
      accessibility: {
        highContrast: false,
        largeText: false,
        screenReader: false,
        colorBlindMode: false
      }
    });
    setTouched({
      academic: {},
      communication: {}
    });
  };

  const showWarning = (category, field) => {
    return touched[category]?.[field] && !preferences[category][field];
  };

  return (
    <PreferenceContainer>
      <form onSubmit={handleSubmit}>
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
              </SelectWrapper>
            </FormGroup>

            <FormGroup>
              <Label>Study Mode</Label>
              <SelectWrapper>
                <Select
                  value={preferences.academic.studyMode}
                  onChange={(e) => handleChange('academic', 'studyMode', e.target.value)}
                  onBlur={() => handleBlur('academic', 'studyMode')}
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
              </SelectWrapper>
            </FormGroup>

            <FormGroup>
              <Label>Preferred Location</Label>
              <SelectWrapper>
                <Select
                  value={preferences.academic.preferredLocation}
                  onChange={(e) => handleChange('academic', 'preferredLocation', e.target.value)}
                  onBlur={() => handleBlur('academic', 'preferredLocation')}
                >
                  <option value="">Select Location</option>
                  <option value="local">Local</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </Select>
                {showWarning('academic', 'preferredLocation') && (
                  <WarningText>Please select a location</WarningText>
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
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </Select>
                {showWarning('communication', 'preferredLanguage') && (
                  <WarningText>Please select a language</WarningText>
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
                >
                  <option value="">Select Mode</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="chat">Chat</option>
                </Select>
                {showWarning('communication', 'communicationMode') && (
                  <WarningText>Please select a communication mode</WarningText>
                )}
              </SelectWrapper>
            </FormGroup>
          </PreferenceGrid>
        </PreferenceSection>

        {/* Rest of the sections remain unchanged */}
        <PreferenceSection>
          <SectionTitle>Notification Preferences</SectionTitle>
          <PreferenceGrid>
            <ToggleContainer>
              <Label>Email Notifications</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.notifications.email}
                  onChange={(e) => handleChange('notifications', 'email', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>

            <ToggleContainer>
              <Label>SMS Notifications</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.notifications.sms}
                  onChange={(e) => handleChange('notifications', 'sms', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>

            <ToggleContainer>
              <Label>Application Updates</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.notifications.applicationUpdates}
                  onChange={(e) => handleChange('notifications', 'applicationUpdates', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>

            <ToggleContainer>
              <Label>Promotional Offers</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.notifications.promotionalOffers}
                  onChange={(e) => handleChange('notifications', 'promotionalOffers', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>
          </PreferenceGrid>
        </PreferenceSection>

        <PreferenceSection>
          <SectionTitle>Accessibility Preferences</SectionTitle>
          <PreferenceGrid>
            <ToggleContainer>
              <Label>High Contrast Mode</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.accessibility.highContrast}
                  onChange={(e) => handleChange('accessibility', 'highContrast', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>

            <ToggleContainer>
              <Label>Large Text</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.accessibility.largeText}
                  onChange={(e) => handleChange('accessibility', 'largeText', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>

            <ToggleContainer>
              <Label>Screen Reader Support</Label>
              <ToggleSwitch>
                <input
                  type="checkbox"
                  checked={preferences.accessibility.screenReader}
                  onChange={(e) => handleChange('accessibility', 'screenReader', e.target.checked)}
                />
                <span />
              </ToggleSwitch>
            </ToggleContainer>
          </PreferenceGrid>
        </PreferenceSection>

        <ButtonContainer>
          <Button type="button" onClick={handleReset}>
            Reset Preferences
          </Button>
          <Button type="submit">
            Save Preferences
          </Button>
        </ButtonContainer>
      </form>
    </PreferenceContainer>
  );
};

export default Preferences;