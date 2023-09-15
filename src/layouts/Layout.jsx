import {Outlet,NavLink} from "react-router-dom"
import styles from "./styles.module.css"
import userIcon from "../assets/userIcon.png"
import BellIcon from "../assets/notification-bell-svgrepo-com.svg"

function Layout(){
    return(
        <div>
            {/* essa é a caixa que comporta todo layout */}
            <div className={styles.LayoutContainer}> 
                {/* essa é a tag de cabeçario do html e ela é muito importante apara mecanismo de busca (seo)  */}
                <header className={styles.LayoutHeader}>
                    <div className={styles.BellIconDiv}>
                        {/* a tag img precisa do atributo src para inserir a img */}
                        <img src={BellIcon}/>
                    </div>

                    <p>Usuário Logado</p>

                    <img src={userIcon} className={styles.userIcon}/>
                </header>

                {/* tag do html semantica para conteudo principal  */}
                <main className={styles.layoutMainContainer}>

                    {/* tag do html semantica para conteudo lateral */}
                    <aside className={styles.layoutSidebar}>
                        <h2>O/ME</h2>

                        {/* tag do html semantica para links navegaveis */}
                        <nav className={styles.layoutSidebarNavlinksNav}>

                            {/* elemento importado da biblioteca de rotiamento utilizado para navegar entre rotas */}
                            <NavLink to="/"><p>Jornada Gamificada</p></NavLink>
                            <NavLink to="/welcomekit"><p>Welcome Kit</p></NavLink>    
                        </nav>
                        
                    </aside>

                    {/* esse é o elemento rederizador das rotas que estão dentro desse layout  */}
                    <Outlet/>

                </main>
            </div>
            
            
        </div>
    )
}

export default Layout