import {NavLink} from "react-router-dom";
import "./styles.css";

export default function RedButton({path, children}) {
  return (
    <NavLink className="navLink" to={path}>
      {children}
    </NavLink>
  );
}
