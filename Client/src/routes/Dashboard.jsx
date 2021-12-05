import { Link } from "react-router-dom";
import GetRecordsList from "../components/GetRecordsList";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/add" className="btn btn-outline-primary mb-2">
        Add record
      </Link>
      <GetRecordsList />
    </div>
  );
};
export default Dashboard;
