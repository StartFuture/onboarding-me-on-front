import React from "react";
import "./Modal.css";

const ModalInput = ({ title, placeholder }) => (
  <div className="modal-input">
    <h2 className="title-modal">{title}</h2>
    <input type="text" placeholder={placeholder} />
  </div>
);

const Modal = ({ show, onClose, onSave }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <div className="modal-content">
          <div className="title">
            <h1>Adicionar Ferramenta</h1>
          </div>
          <div className="modal-content-input">
            <ModalInput title="Categoria" placeholder="Digite aqui" />
            <ModalInput title="Ferramentas" placeholder="Digite aqui" />
            <ModalInput title="Pontos" placeholder="Digite aqui" />
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">
            Cancelar
          </button>
          <button onClick={onSave} className="save-button">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
