import {NavLink} from "react-router-dom";
import "./styles.css";

export default function ContinueButton({path}) {
  return (
    <NavLink className="navLink" to={path}>
      Continuar
    </NavLink>
  );
}
