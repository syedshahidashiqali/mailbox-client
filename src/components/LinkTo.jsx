import { NavLink } from "react-router-dom";

function LinkTo({ path, text }) {
  return (
    <NavLink
      style={{ marginRight: "20px", fontSize: "30px", textDecoration: "none" }}
      to={path}
    >
      {text}
    </NavLink>
  );
}

export default LinkTo;
