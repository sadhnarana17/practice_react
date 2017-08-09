import React from 'react';

import Header from '../../components/Layout/Header';
import HomepageTopImage from '../../components/HomepageTopImage/HomepageTopImage';
import LogosContainer from '../../components/LogosContainer/LogosContainer';
import InfoBox from '../../components/InfoBox/InfoBox';
import Footer from '../../components/Footer/Footer';
import GetInTouchBar from '../../components/GetInTouchBar/GetInTouchBar';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';

import { title, box1Title, box1Text, box1Button, box2Title, box2Text,
  box2Button, box3Title, box3Text, box3Button,
  box4Title, box4Text, box4Button, getInTouchTitle, getInTouchButton } from './index.md';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.infoBox1 = {
      imageName: 'landing_why.png',
      gradient: 'lightblue',
      titleText: box1Title,
      contentText: box1Text,
      buttonText: box1Button,
      linksTo: '/why',
    };
    this.infoBox2 = {
      imageName: 'latetrip-background.jpg',
      extraImageName: 'latetripmacbook.png',
      gradient: 'darkblue',
      titleText: box2Title,
      contentText: box2Text,
      buttonText: box2Button,
      imagePosition: 'left',
      linksTo: '/what',
    };
    this.infoBox3 = {
      imageName: 'landing_how.png',
      gradient: 'pink',
      titleText: box3Title,
      contentText: box3Text,
      buttonText: box3Button,
      linksTo: '/how',
    };
    this.videoInfoBox = {
      imageName: 'landing_who.png',
      gradient: 'orange',
      titleText: box4Title,
      contentText: box4Text,
      buttonText: box4Button,
      imagePosition: 'left',
      linksTo: '/who',
    };
  }

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <HomepageTopImage />
          <LogosContainer />
          <InfoBox {...this.infoBox1} />
          <InfoBox {...this.infoBox2} />
          <InfoBox {...this.infoBox3} />
          <VideoInfoBox {...this.videoInfoBox} />
          <GetInTouchBar linksTo="/contact" title={getInTouchTitle} buttonText={getInTouchButton} />
          <Footer />
        </main>
      </div>
    );
  }

}

export default HomePage;
