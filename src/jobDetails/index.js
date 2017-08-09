import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import data from './jobdetail.json';
import JobDescription from '../../components/jobDescription/JobDescription';

class JobDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPosition: location.pathname.replace('/', ''),
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDescription
            jobTitle={data[this.state.currentPosition].title}
            mentoredBy={data[this.state.currentPosition].mentorby}
            businessArea={data[this.state.currentPosition].businessarea}
            location={data[this.state.currentPosition].location}
            salary={data[this.state.currentPosition].salary}
            funStuff={data[this.state.currentPosition].funstuff}
            whatNeed={data[this.state.currentPosition].whatneed}
            whyLove={data[this.state.currentPosition].whylove}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default JobDetail;
