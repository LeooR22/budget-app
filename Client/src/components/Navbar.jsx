// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { userContext as Leo } from "../context/UserProvider";

const Navbar = () => {
  //   const { user } = useContext(Leo);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        {/* <Link to="/">{user ? "Leo" : "Sin Conexion"}</Link> */}
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="btn btn-outline-primary">
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
