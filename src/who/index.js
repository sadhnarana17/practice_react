import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';

import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import GetInTouchBar from '../../components/GetInTouchBar/GetInTouchBar';
import WhoBox from '../../components/WhoBox/WhoBox';

import { getInTouchTitle, getInTouchButton, pageTitle, pageSubtitle, text1, name1, title1, text2, name2, title2, text3, name3, title3 } from './who.md';


function WhoPage() {
  const whoBox1 = {
    imagePosition: 'right',
    text: text1,
    name: name1,
    title: title1,
    imageName: 'who_case1.png',
    logoName: 'who_case1logo.png',
    photoName: 'simonbath-150x150.jpg',
    id: 'wym',
  };
  const whoBox2 = {
    imagePosition: 'left',
    text: text2,
    name: name2,
    title: title2,
    imageName: 'who_case2.png',
    logoName: 'who_case2logo.png',
    photoName: 'philipwride-150x150.jpg',
  };
  const whoBox3 = {
    imagePosition: 'right',
    text: text3,
    name: name3,
    title: title3,
    imageName: 'who_case3.png',
    logoName: 'who_case3logo.png',
    photoName: 'tobyphoto.jpg',
  };

  return (
    <div>
      <Header />
      <main>
        <PageTitleSection gradient="orange" title={pageTitle} subtitle={pageSubtitle} scrollTo="wym" />
        <WhoBox {...whoBox1} />
        <WhoBox {...whoBox2} />
        <WhoBox {...whoBox3} />
        <GetInTouchBar linksTo="/contact" title={getInTouchTitle} buttonText={getInTouchButton} />
      </main>
      <Footer />
    </div>
  );
}

export default WhoPage;
