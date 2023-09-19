import React, { useState } from "react";
import axios from "axios";
import "./ModalVideo.css";



const VideoModal = ({ show, onClose, isNewVideo, videoLink, handleChange}) => {
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
    axios({
      method: "POST",
      url: "http://localhost:8000/game_journey/create/",
      data: { welcome_video_link: videoUrl, company_id: 1 },
    })
      .then((response) => {
        handleChange(videoUrl)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const updateVideoLink = (videoUrl) => {
    axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/game_journey/update?company_id=1&new_link=${videoUrl}`,
    })
      .then((response) => {
        handleChange(videoUrl);
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
                defaultValue={videoLink}
                onChange={(e) => setVideoUrl(e.target.value)}
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
};

export default VideoModal;
