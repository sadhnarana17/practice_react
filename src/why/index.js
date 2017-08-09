import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import TextSection from '../../components/TextSection/TextSection';
import Carousel from '../../components/Carousel/Carousel';
import UCList from '../../components/UCList/UCList';
import GetInTouchBar from '../../components/GetInTouchBar/GetInTouchBar';
import TeamList from '../../components/TeamList/TeamList';
import { title, subtitle, ourStory, ourStoryText, principlesTitle, principlesText, getInTouchTitle,
  leadershipTitle, leadershipText, getInTouchButton } from './why.md';

function WhyPage() {
  return (
    <div>
      <Header />
      <main>
        <PageTitleSection gradient="lightblue" title={title} subtitle={subtitle} scrollTo="ourStory" />
        <TextSection id="ourStory" title={ourStory} text={ourStoryText} />
        <Carousel />
        <TextSection title={principlesTitle} text={principlesText} background="dark">
          <UCList />
        </TextSection>
        <TextSection title={leadershipTitle} text={leadershipText} textAlign="center">
          <TeamList />
        </TextSection>
        <GetInTouchBar linksTo="/contact" title={getInTouchTitle} buttonText={getInTouchButton} />
      </main>
      <Footer />
    </div>
  );
}

export default WhyPage;
