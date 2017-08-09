import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';

import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import InfoBox from '../../components/InfoBox/InfoBox';
import GetInTouchBar from '../../components/GetInTouchBar/GetInTouchBar';

import { getInTouchTitle, getInTouchButton, pageTitle, pageSubtitle, box1Title, box1Text, box2Title, box2Text, box3Title, box3Text, box4Title, box4Text } from './what.md';


function WhatPage() {
  const infoBox1 = {
    imageName: '',
    extraImageName: 'what_app.png',
    gradient: 'white',
    titleText: box1Title,
    contentText: box1Text,
    textColor: '#2d2f30',
    imagePosition: 'right',
    backgroundColor: '#d8d8d8',
    id: 'appDev',
    icons: ['icon_ios.png', 'icon_android.png'],
  };
  const infoBox2 = {
    imageName: '',
    extraImageName: 'what_web.png',
    gradient: 'white',
    titleText: box2Title,
    contentText: box2Text,
    textColor: '#2d2f30',
    imagePosition: 'left',
    backgroundColor: '#d8d8d8',
    icons: ['icon_desktop.png', 'icon_tablet.png'],
  };
  const infoBox3 = {
    imageName: 'what_product.png',
    gradient: 'white',
    titleText: box3Title,
    contentText: box3Text,
    textColor: '#2d2f30',
    imagePosition: 'right',
    backgroundSize: 'cover',
    backgroundColor: '#d8d8d8',
  };
  const infoBox4 = {
    imageName: '',
    extraImageName: 'what_bolt.png',
    gradient: 'white',
    titleText: box4Title,
    contentText: box4Text,
    textColor: '#2d2f30',
    imagePosition: 'left',
    backgroundColor: '#d8d8d8',
  };

  return (
    <div>
      <Header />
      <main>
        <PageTitleSection gradient="darkblue" title={pageTitle} subtitle={pageSubtitle} scrollTo="appDev" />
        <InfoBox {...infoBox1} />
        <InfoBox {...infoBox2} />
        <InfoBox {...infoBox3} />
        <InfoBox {...infoBox4} />
        <GetInTouchBar linksTo="/contact" title={getInTouchTitle} buttonText={getInTouchButton} />
      </main>
      <Footer />
    </div>
  );
}

export default WhatPage;
