import {
  ProfileBanner,
  ProfileContainer,
  ProgressCircle,
  ProgressText,
  ProfileContent,
  ProfileTitle,
  ProfileDescription,
  CompleteProfileButton,
} from "./styledComponents";

const DashboardProfile = () => {
  return (
    <ProfileBanner>
      <ProfileContainer>
        <ProgressCircle>
          <ProgressText>
            <strong>20%</strong>
            <span>Completed</span>
          </ProgressText>
        </ProgressCircle>
        <ProfileContent>
          <ProfileTitle>Hey User, Your profile is incomplete!</ProfileTitle>
          <ProfileDescription>
            Complete your profile and we will help you in building better
            college recommendations for you. You are one step closer to earning
            100 reward points
          </ProfileDescription>
        </ProfileContent>
      </ProfileContainer>
      <CompleteProfileButton type="button">
        Complete Your Profile
      </CompleteProfileButton>
    </ProfileBanner>
  );
};

export default DashboardProfile;
