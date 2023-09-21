import "./ThreePointProgressBar.scss";
import progressBarImg from "../../../../../assets/ProgressBarWK4.png";
import progressBarImgResponsive from "../../../../../assets/ProgressBarWK4Responsive.png";

export default function ThreePointProgressBar() {
  return (
    <div className="progress-bar">
      <img className="normal" src={progressBarImg} alt="" />
      <img className="responsive" src={progressBarImgResponsive} alt="" />
    </div>
  );
}
