import styled from "styled-components";

export const ProfileBanner = styled.div`
  background: #f5f7ff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProgressCircle = styled.div`
  width: 150px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #e0e6ff;
    border-top-color: #4c6fff;
    // transform: rotate(-45deg);
  }
`;

export const CompleteProfileButton = styled.button`
  background: #4c6fff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3d5ce0;
  }
`;
