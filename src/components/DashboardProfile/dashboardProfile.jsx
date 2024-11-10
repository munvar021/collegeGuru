import {ProfileBanner, ProgressCircle, CompleteProfileButton} from "./styledComponents"

const DashboardProfile = () => {
    return(
        <ProfileBanner>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ProgressCircle>
                <strong>20%</strong>
                <span style={{ fontSize: '0.8rem' }}>Completed</span>
            </ProgressCircle>
            <div>
                <h2 style={{ margin: '0 0 8px 0' }}>Hey User, Your profile is incomplete!</h2>
                <p style={{ margin: 0, color: '#666' }}>
                Complete your profile and we will help you in building better college recommendations for you.
                You are one step closer to earning 100 reward points
                </p>
            </div>
            </div>
            <CompleteProfileButton>Complete Your Profile</CompleteProfileButton>
        </ProfileBanner>
    )
}

export default DashboardProfile