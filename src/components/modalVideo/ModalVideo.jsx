import { useState } from "react";
import "./ModalVideo.css";
import api from "../../services/api";
import config from "../../services/config";

function VideoModal({ show, onClose, isNewVideo, videoLink, handleChange }) {
  const [videoUrl, setVideoUrl] = useState("");

  if (!show) {
    return null;
  }

  const handleAddVideo = () => {
    if (videoUrl.trim() !== "") {
      if (isNewVideo) {
        addVideoLink(videoUrl);
      } else {
        updateVideoLink(videoUrl);
      }
      onClose();
    }
  };

  const addVideoLink = (videoUrl) => {
    api.post('game_journey/create', { welcome_video_link: videoUrl}, config)
      .then((response) => {
        handleChange(videoUrl)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateVideoLink = (videoUrl) => {
    const company = JSON.parse(localStorage.getItem("company"));
    api.put(`game_journey/update?new_link=${videoUrl}`, {}, config)
      .then((response) => {
        handleChange(videoUrl)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <div className="modal-content">
          <div className="title">
            <h1>Adicionar Vídeo</h1>
          </div>
          <div className="modal-content-input">
            <div className="modal-input">
              <h2 className="title-modal">URL do Vídeo</h2>
              <input
                type="text"
                placeholder="Digite a URL do vídeo"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">
            Cancelar
          </button>
          <button onClick={handleAddVideo} className="save-button">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
