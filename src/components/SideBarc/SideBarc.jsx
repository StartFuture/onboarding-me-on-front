import {Outlet,NavLink} from "react-router-dom"
import styles from "./SideBarc.css"

export default function SideBarc() {

return(
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
)
}