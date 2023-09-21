import styles from "./style.module.css";
import userIcon from "../../assets/userIcon.png";
import BellIcon from "../../assets/notification-bell-svgrepo-com.svg";

export default function NavBarc() {
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.BellIconDiv}>
        <img src={BellIcon} />
      </div>

      <p>Usuário Logado</p>

      <img src={userIcon} className={styles.userIcon} />
    </div>
  );
}
