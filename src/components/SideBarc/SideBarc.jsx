import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"
import Logo from "../../assets/svg/Logo.svg"

export default function SideBarc() {

    return (
        <div className={styles.SidebarContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="O/ME Logo" className={styles.logoImage} />
            </div>
            <nav className={styles.SidebarNavLinks}>
                <NavLink to="/menu"><p>Jornada Gamificada</p></NavLink>
                <NavLink to="/welcomekit"><p>Welcome Kit</p></NavLink>
            </nav>
        </div>
    )
}