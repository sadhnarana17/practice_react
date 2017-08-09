import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import GetInTouchBar from '../../components/GetInTouchBar/GetInTouchBar';
import InfoBox from '../../components/InfoBox/InfoBox';

import {
  pageTitle, pageSubtitle, getInTouchTitle, getInTouchButton, box1Title,
  box1Text, box2Title, box2Text, box3Title, box3Text, box4Title, box4Text } from './how.md';

function HowPage() {
  const infoBox1 = {
    imageName: 'how_exploration.png',
    gradient: 'white',
    titleText: box1Title,
    contentText: box1Text,
    textColor: '#2d2f30',
    imagePosition: 'right',
    backgroundColor: '#d8d8d8',
    id: 'exploration',
    icons: ['icon_exploration.png'],
    iconType: 'big',
  };
  const infoBox2 = {
    imageName: 'how_creation.png',
    gradient: 'white',
    titleText: box2Title,
    contentText: box2Text,
    textColor: '#2d2f30',
    imagePosition: 'left',
    backgroundColor: '#d8d8d8',
    icons: ['icon_creation.png'],
    iconType: 'big',
  };
  const infoBox3 = {
    imageName: 'how_validation.png',
    gradient: 'white',
    titleText: box3Title,
    contentText: box3Text,
    textColor: '#2d2f30',
    imagePosition: 'right',
    backgroundColor: '#d8d8d8',
    icons: ['icon_validation.png'],
    iconType: 'big',
  };
  const infoBox4 = {
    imageName: 'how_domination.png',
    gradient: 'white',
    titleText: box4Title,
    contentText: box4Text,
    textColor: '#2d2f30',
    imagePosition: 'left',
    backgroundColor: '#d8d8d8',
    icons: ['icon_domination.png'],
    iconType: 'big',
  };

  return (
    <div>
      <Header />
      <main>
        <PageTitleSection gradient="pink" title={pageTitle} subtitle={pageSubtitle} scrollTo="exploration" />
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

export default HowPage;
