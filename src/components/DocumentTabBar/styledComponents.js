import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    border-bottom: none;
    min-width: 250px;
    margin-bottom: 0;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: fit-content;
    padding: 16px 0;
  }
`;

export const TabItem = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#2563eb" : "#666666")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "#2563eb" : "transparent")};
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  width: 100%;
  text-align: left;

  &:hover {
    color: #2563eb;
    background-color: ${(props) =>
      props.active ? "transparent" : "rgba(37, 99, 235, 0.05)"};
  }

  @media (min-width: 1024px) {
    border-bottom: none;
    border-left: 4px solid
      ${(props) => (props.active ? "#2563eb" : "transparent")};
    margin: 4px 0;
    padding: 12px 20px;

    &:hover {
      border-left: 4px solid
        ${(props) => (props.active ? "#2563eb" : "#94a3b8")};
    }
  }
`;
