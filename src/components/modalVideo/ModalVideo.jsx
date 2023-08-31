import React, { useState } from 'react';
import './ModalVideo.css';

const VideoModal = ({ show, onClose, onAddVideo }) => {
  const [videoUrl, setVideoUrl] = useState('');

  if (!show) { 
    return null;
  }

  const handleAddVideo = () => {
    if (videoUrl.trim() !== '') {
      onAddVideo(videoUrl);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">X</button>
        <div className="modal-content">
          <div className="title">
            <h1>Adicionar Vídeo</h1>
          </div>
          <div className="modal-content-input">
            <div className="modal-input">
              <h2 className="title-modal">URL do Vídeo</h2>
              <input type="text" placeholder="Digite a URL do vídeo" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancelar</button>
          <button onClick={handleAddVideo} className="save-button">Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
