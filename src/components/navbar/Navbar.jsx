import { useContext , useState} from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const onLogout = () => {
    // localStorage.removeItem("user");
    // navigate("/login");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <p>{user.username}</p>
            <button className="navButton" onClick={onLogout()}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <Link to={"/"}>
              <button className="navButton">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
