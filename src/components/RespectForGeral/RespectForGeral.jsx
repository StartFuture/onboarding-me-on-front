import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "../../components/modal/Modal";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";
import VideoModal from "../../components/modalVideo/ModalVideo";
import '../../pages/UsersMenu/styles.css';



function RespectForGeral() {
    const [videoLink, setVideoLink] = useState({});
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8000/game_journey/get-video/1",
        })
            .then((response) => {
                setVideoLink(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleSaveModal = () => {
        alert("Informações salvas!");
        handleCloseModal();
    };

    const [showVideoModal, setShowVideoModal] = useState(false);

    const openModal = () => {
        setShowVideoModal(true);
    };

    const closeModal = () => {
        setShowVideoModal(false);
    };


    const handleChange = useCallback((videoUrl) => {
        setVideoLink({ ...videoLink, welcome_video_link: videoUrl });
    }, []);

    const handleDeleteVideo = () => {
        axios({
            method: "DELETE",
            url: `http://127.0.0.1:8000/game_journey/delete?company_id=1`,
        })
            .then(() => {
                setVideoLink({});
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="Subtitle">
                <p>
                    Informe o vídeo de apresentação da empresa. O colaborador irá
                    assistir assim que iniciar o processo.
                </p>
            </div>
            {videoLink.welcome_video_link ? (
                <div className="YoutubeEdit">
                    <div>
                        <img src={Youtube} alt="Youtube Logo" />
                        <div>
                            <p>Youtube</p>
                            <p className="UrlYoutube">{videoLink.welcome_video_link}</p>
                        </div>
                    </div>
                    <div className="icons-container">
                        <img onClick={openModal} src={Edicao} alt="Editar" />
                        <img src={Lixeira} alt="Lixeira"
                            onClick={() => handleDeleteVideo()}
                        />
                    </div>
                </div>
            ) : (
                !videoLink.welcome_video_link && (
                    <div className="AddVideoButtonContainer">
                        <button className="RedButton" onClick={openModal}>
                            Adicionar Vídeo
                        </button>
                    </div>
                )
            )}
            <VideoModal
                isNewVideo={!videoLink.welcome_video_link}
                videoLink={videoLink.welcome_video_link}
                show={showVideoModal}
                onClose={closeModal}
                handleChange={handleChange}
            />
            <div className="ToolsTitle">
                <div className="Subtitle">Ferramentas do dia a dia.</div>
                <button className="RedButton" onClick={handleOpenModal}>
                    adicionar
                </button>
                <Modal
                    show={showModal}
                    onClose={handleCloseModal}
                    onSave={handleSaveModal}
                />
            </div>


            <div className="Tools">


                <div className="ToolsEdit">
                    <div>
                        <img src={Discord} alt="Discord" />
                        <div>
                            <p>Discord</p>
                            <p className="Points">10pt</p>
                            <p className="Points">10pt</p>
                        </div>
                    </div>
                    <div className="icons-container">
                        <img src={Edicao} alt="Editar" />
                        <img src={Lixeira} alt="Lixeira" />
                    </div>
                </div>
                <div className="ToolsEdit">
                    <div>
                        <img src={Discord} alt="Discord" />
                        <div>
                            <p>Discord</p>
                            <p className="Points">10pt</p>
                        </div>
                    </div>
                    <div className="icons-container">
                        <img src={Edicao} alt="Editar" />
                        <img src={Lixeira} alt="Lixeira" />
                    </div>
                </div>
                <div className="ToolsEdit">
                    <div>
                        <img src={Discord} alt="Discord" />
                        <div>
                            <p>Discord</p>
                            <p className="Points">10pt</p>
                        </div>
                    </div>
                    <div className="icons-container">
                        <img src={Edicao} alt="Editar" />
                        <img src={Lixeira} alt="Lixeira" />
                    </div>
                </div>
            </div>


        </>
    )
}
export default RespectForGeral