import { DashboardContainer } from "./styledComponents";
import DashboardProfile from "../../components/DashboardProfile/dashboardProfile";
import DashboardCards from "../../components/DashboardCards/dashboardCards";
import DashboardOptions from "../../components/DashboardOptions/dashboardOptions";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardProfile />
      <DashboardCards />
      <DashboardOptions />
    </DashboardContainer>
  );
};

export default Dashboard;
