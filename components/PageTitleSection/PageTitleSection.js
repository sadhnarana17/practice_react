import React from 'react';
import Scroll from 'react-scroll';
import s from './PageTitleSection.css';

class PageTitleSection extends React.Component {
  constructor(props) {
    super(props);
    this.gradients = {
      lightblue: 'linear-gradient(135deg, #0EDBF2 0%, #0E3FF2 100%)',
      darkblue: 'linear-gradient(135deg, #0E3FF2 0%, #780EF2 100%)',
      pink: 'linear-gradient(135deg, #780EF2 0%, #F20E91 100%)',
      orange: 'linear-gradient(135deg, #F20E91 0%, #F2CE0E 100%)',
      grey: 'linear-gradient(135deg, #f1f7f8 0%, #f1f7f8 100%)',
    };
    this.containerStyles = {
      backgroundImage: this.gradients[this.props.gradient],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const ScrollLink = Scroll.Link;
    return (
        (location.pathname !== '/career') ? <div className={s.container} style={this.containerStyles}> <h1 className={s.title}>{this.props.title}</h1><p className={s.subtitle}>{this.props.subtitle}</p><ScrollLink to={this.props.scrollTo} smooth duration={500} offset={-60} className={s.button} /></div> : <div className={s.halfHeightcontainer} style={this.containerStyles}> <h1 className={s.greytitle}>{this.props.title}</h1> <p className={s.greytext} >{this.props.subtitle}</p></div>
    );
  }
}

export default PageTitleSection;
