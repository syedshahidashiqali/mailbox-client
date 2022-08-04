import { NavLink } from "react-router-dom";
import { useGetApi } from "../customHooks/useGetApi.js";
import { GETUSER } from "../utlis/apiUrls";
import LinkTo from "./LinkTo.jsx";

function Header() {
  const userData = useGetApi(GETUSER);
  return (
    <nav>
      {userData?.detail?.username ? (
        <>
          <span
            style={{ marginRight: "20px", fontSize: "30px", color: "green" }}
          >
            {userData?.detail?.username}
          </span>
          <LinkTo text="Home" path="/" />
          <LinkTo text="View sent mails" path="/sent" />
          <LinkTo text="View inbox" path="/inbox" />
          <NavLink
            style={{
              marginRight: "20px",
              fontSize: "30px",
              textDecoration: "none",
            }}
            to="/login"
            onClick={() => localStorage.removeItem("TOKEN")}
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <LinkTo text="Login" path="/login" />
          <LinkTo text="Sign Up" path="/signup" />
        </>
      )}
    </nav>
  );
}

export default Header;
