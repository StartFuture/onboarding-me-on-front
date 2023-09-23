import {useState} from "react";
import {Outlet, NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import userIcon from "../assets/userIcon.png";
import BellIcon from "../assets/Notifications.png";
import jornadaIcon from "../assets/icon (2).png";
import welcomeKitIcon from "../assets/icon (3).png";
import meuPerfilIcon from "../assets/icon (1).png";
import hamburgerIcon from "../assets/hamburguerIcon.png";
import arrowIcon from "../assets/Arrow-Stroke.png";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={styles.LayoutContainer}>
        <header className={styles.LayoutHeader}>
          <img
            src={hamburgerIcon}
            alt="Hamburger Menu"
            className={styles.hamburgerIcon}
            onClick={toggleSidebar}
          />
          <div className={styles.BellIconDiv}>
            <img src={BellIcon} />
          </div>

          <div className={styles.omeDiv}>
            <h2>O/ME</h2>
          </div>
          <p className={styles.pUsuarioLogged}>Usuário Logado</p>
          <img src={userIcon} className={styles.userIcon} />
        </header>

        <main className={styles.layoutMainContainer}>
          <aside
            className={`${styles.layoutSidebar} ${
              isSidebarOpen ? styles.open : ""
            }`}>
            <h2>O/ME</h2>
            <nav className={styles.layoutSidebarNavlinksNav}>
              <NavLink to="/jornada/page1">
                <img src={jornadaIcon} alt="" />
                <p>Jornada Gamificada</p>
              </NavLink>
              <NavLink to="/welcomekit">
                <img src={welcomeKitIcon} alt="" />
                <p>Welcome Kit</p>
              </NavLink>
              <NavLink to="/meuperfil">
                <img src={meuPerfilIcon} alt="" />
                <p>Meu perfil</p>
              </NavLink>
              <img
                src={arrowIcon}
                alt="Arrow icon"
                className={styles.arrowIcon}
                onClick={toggleSidebar}
              />
            </nav>
          </aside>

          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
