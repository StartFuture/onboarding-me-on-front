import "./Navbar.css";
import Iniciais from "../../assets/svg/UL.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        Usuario Logado | UL{" "}
        <img className="Iniciais" src={Iniciais} alt="Iniciais" />
      </div>
    </nav>
  );
}

export default Navbar;
