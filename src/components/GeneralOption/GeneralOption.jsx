import { useCallback, useEffect, useState } from "react";

import styles from "../../pages/jornada/JornadaAdmin/styles.module.scss";
import DiscordIcon from "../../assets/DiscordIcon.png";
import ytIcon from "../../assets/YoutubeIcon.png";
import editPng from "../../assets/Edit.png";
import excluirIcon from "../../assets/Delete.png";
import VideoModal from "../modalVideo/ModalVideo";
import Modal from "../modal/Modal";
import api from "../../services/api";
import config from "../../services/config";

function GeneralOption() {
    const [videoLink, setVideoLink] = useState({
        welcome_video_link: ""
    });
    const [toolList, setToolList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
   
    useEffect(() => {
        
        api.get('game_journey/get-video/', config)
        .then((response) => setVideoLink(response.data))
        .catch((error) => console.log(error));

        api.get('tool/', config)
        .then((response) => setToolList(response.data))
        .catch((error) => console.log(error));
    }, []);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleSaveModal = () => {
        alert("Informações salvas!");
        handleCloseModal();
    };

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
        api.delete('game_journey/delete', config)
        .then(() => setVideoLink({}))
        .catch((error) => console.error(error));
    };

    const handleDeleteTool = (toolId, gameId) => {
        api.delete(`tool/delete?tool_id=${toolId}&game_id=${gameId}`, config)
        .then(() => setToolList(toolList.filter((tool) => tool.id !== toolId)))
        .catch((error) => console.error(error));
    };

    return (
        <>
            <h3>
                Informe o vídeo de apresentação da empresa. O colaborador irá
                assistir assim que iniciar o processo.
            </h3>

            {videoLink.welcome_video_link ? (
                <div className={styles.boxFlex}>
                    <div className={styles.boxFlexFirstFlex}>
                        <div className={styles.boxFlexIcon}>
                            <img src={ytIcon} alt="" />
                        </div>

                        <div className={styles.boxFlexIconInsideFlex}>
                            <h3>Youtube</h3>
                            <p>{videoLink.welcome_video_link}</p>
                        </div>
                    </div>

                    <div className={styles.boxFlexButtons}>
                        <img src={editPng} alt="pencil--v1" onClick={openModal} />
                        <img src={excluirIcon} alt="trash" onClick={() => handleDeleteVideo()} />
                    </div>
                </div>
            ) : (
                <div>
                    <button className={styles.addButtonUpper} onClick={openModal}>
                        Adicionar Vídeo
                    </button>
                </div>
            )}

            <div className={styles.insideFlexTitleAndBtn}>
                <h3>Ferramentas do dia a dia.</h3>

                <button className={styles.addButtonUpper} onClick={handleOpenModal}>
                    Adicionar
                </button>
            </div>

            {toolList.map((tool) => (
                <div className={styles.cardFlex}>
                    <div className={styles.boxFlex}>
                        <div className={styles.boxFlexFirstFlex}>
                            <div className={styles.boxFlexIcon}>
                                <img src={DiscordIcon} alt="" />
                            </div>

                            <div className={styles.boxFlexIconInsideFlex}>
                                <h3>{tool.name}</h3>
                                <p>{tool.score}pt</p>
                            </div>
                        </div>

                        <div className={styles.boxFlexButtons}>
                            <img src={editPng} alt="pencil--v1" />
                            <img src={excluirIcon} alt="trash"
                                onClick={() => handleDeleteTool(tool.tool_id, tool.game_id)} />
                        </div>
                    </div>
                </div>
            ))}

            <button className={styles.addButtonDown}>Adicionar</button>

            <VideoModal
                isNewVideo={!videoLink.welcome_video_link}
                videoLink={videoLink.welcome_video_link}
                show={showVideoModal}
                onClose={closeModal}
                handleChange={handleChange} />

            <Modal
                show={showModal}
                onClose={handleCloseModal}
                onSave={handleSaveModal}
            />
        </>
    );
}

export default GeneralOption;