import "./ThreePointProgressBar.scss";
import progressBarImg from "../../../../assets/ProgressBarWK1.png";
import progressBarImgResponsive from "../../../../assets/ProgressBarWK1Responsive.png";

export const ThreePointProgressBar = () => {
  return (
    <div className="progress-bar">
      <img className="normal" src={progressBarImg} alt="" />
      <img className="responsive" src={progressBarImgResponsive} alt="" />
    </div>
  );
};
