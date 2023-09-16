import "./assets/css/style.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Gamifield() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="video-container">
        <div className="title-with-bar">
          <div className="bar" />
          <h1 className="title">
            Olá, Usuário. <br />
            Boas-vindas à Jornada Gamificada da EmpresaNova.
          </h1>
        </div>
        <p>Para iniciar, assista o vídeo que preparamos para você. </p>

        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/2VsENIzqWq8"
          title="Vídeo do Youtube"
          allowFullScreen
        />

        <div className="continue-button">
          <a href="/preChose">
            <button className="button">Continuar</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Gamifield;
