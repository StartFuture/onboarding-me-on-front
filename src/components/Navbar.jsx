const Navbar = () =>{
        
    return (
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><img src="sinoImage" alt="alertas"/></li>
          <div className="nav-divider"></div> {/* Barra de divisão */}
          <li className="nav-item"><a href="#">Usuário Logado</a></li>
          <li className="nav-item"><span>I</span></li>
        </ul>
      </nav>
    );
};

export default Navbar;