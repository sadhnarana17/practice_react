import React from 'react';
import s from './LogosContainer.css';
import { text, desktopText } from './LogosContainer.md';

function LogosContainer() {
  return (
    <div className={`${s.container}`} >
      <p className={s.text}>{text} <span className="desktopOnly">{desktopText}</span></p>
      <div className={s.imageContainer} >
        <img className="desktopOnly" src="./images/logo_clientshare.png" alt="Clientshare logo" />
        <img className="desktopOnly" src="./images/logo_latetrip.png" alt="Clientshare logo" />
        <img src="./images/logo_wym.png" alt="Clientshare logo" />
        <img className="desktopOnly" src="./images/logo_mm.png" alt="Clientshare logo" />
        <img src="./images/logo_myway.png" alt="Clientshare logo" />
        <img src="./images/logo_wagonex.png" alt="Clientshare logo" />
        <img className="desktopOnly" src="./images/logo_jobstars.png" alt="Clientshare logo" />
      </div>
    </div>
  );
}

export default LogosContainer;
