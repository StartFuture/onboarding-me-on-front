import React, { useState } from 'react';
import './ThreePointProgressBar.scss';
import progressBarImg from '../../../../assets/ProgressBarWK2.png'
import progressBarImgResponsive from '../../../../assets/ProgressBarWK2Responsive.png'

export const ThreePointProgressBar = () => {


  return (
    <div className="progress-bar">
      <img className='normal' src={progressBarImg} alt="" />
      <img className='responsive' src={progressBarImgResponsive} alt="" />
    
    </div>
  );
};


