import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { connect } from 'react-redux';
import s from './VideoInfoBox.css';
import Link from '../Link/Link';


const mapStateToProps = state => ({
  videoPlayed: state.videoPlayed,
});

const mapDispatchToProps = dispatch => ({
  onChange: (isVisible) => {
    dispatch({
      type: 'VIDEO',
      isVisible,
    });
  },
});

class VideoInfoBox extends React.Component {
  static defaultProps = {
    imagePosition: 'right',
    autoPlay: false,
    linksTo: '/',
  };
  constructor(props) {
    super(props);
    this.gradients = {
      lightblue: 'linear-gradient(135deg, #0EDBF2 0%, #0E3FF2 100%)',
      darkblue: 'linear-gradient(135deg, #0E3FF2 0%, #780EF2 100%)',
      pink: 'linear-gradient(135deg, #780EF2 0%, #F20E91 100%)',
      orange: 'linear-gradient(135deg, #F20E91 0%, #F2CE0E 100%)',
    };
    this.textContainerStyles = {
      backgroundImage: this.gradients[this.props.gradient],
    };
  }
  componentWillReceiveProps(newProps) {
    if (!this.props.videoPlayed && newProps.videoPlayed) {
      this.videoElement.play();
    }
  }
  render() {
    return (
      <div className={`${s.infoBoxRow} infobox-video-left`} >
        <div className={s.textContainer} style={this.textContainerStyles} >
          <h2 className={s.title}>{this.props.titleText}</h2>
          <p className={s.content}>{this.props.contentText}</p>
          {this.props.buttonText &&
          <Link to={this.props.linksTo} className={s.button}>{this.props.buttonText}</Link>}
        </div>
        <div className={s.videoContainer}>
          <VisibilitySensor onChange={this.props.onChange}>
            <video ref={(videoElement) => { this.videoElement = videoElement; }} controls muted className={s.video} preload="none" poster="images/james-ward.png">
              <source src="https://s3-eu-west-1.amazonaws.com/ucreate/james_testimonial_720p_25fps.mp4" type="video/mp4" />
              <source src="https://s3-eu-west-1.amazonaws.com/ucreate/james_testimonial_720p_25fps.ogv" type="video/ogg" />
              <source src="https://s3-eu-west-1.amazonaws.com/ucreate/james_testimonial_720p_25fps.webm" type="video/webm" />
              Video is not available
            </video>
          </VisibilitySensor>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(VideoInfoBox);
