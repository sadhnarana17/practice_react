import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import topImageData from './topimage.json';
import middleImageData from './middleimage.json';
import bottomImageData from './bottomimage.json';
import TextSection from '../../components/TextSection/TextSection';
import { title, sendCvButtonText, subtitle, ourPosition, ourPositionText, ourPositionLastText, workingAtUcreateTitle, workingAtUcreateText } from './career.md';

const scrollToElement = require('scroll-to-element');

class CareerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionID: 'openposition',
    };
    this.topRowImages = topImageData;
    this.middleRowImages = middleImageData;
    this.bottomRowImages = bottomImageData;
  }

  componentDidMount() {
    if (window.location.href.indexOf('career#openposition') > -1) {
      const element = document.getElementById(this.state.positionID);
      scrollToElement(element, {
        offset: -60,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <PageTitleSection gradient="grey" title={title} subtitle={subtitle} />
          <ImageGallery images={this.topRowImages} />
          <TextSection checkPosition="positionlist" title={ourPosition} text={ourPositionText} positionText={ourPositionLastText} showCvText={sendCvButtonText} positionID={this.state.positionID} />
          <ImageGallery images={this.middleRowImages} />
          <TextSection title={workingAtUcreateTitle} text={workingAtUcreateText} checkCountPanel="countpanel" />
          <ImageGallery images={this.bottomRowImages} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default CareerPage;
