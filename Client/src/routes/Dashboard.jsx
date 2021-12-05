import { Link } from "react-router-dom";
import GetRecordsList from "../components/GetRecordsList";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/add" className="btn btn-warning mb-3 w-25">
        Add record
      </Link>
      <h2>Records</h2>
      <GetRecordsList />
    </div>
  );
};
export default Dashboard;
