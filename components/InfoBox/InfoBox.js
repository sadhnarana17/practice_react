import React from 'react';
import s from './InfoBox.css';
import Link from '../Link/Link';

class InfoBox extends React.Component {
  static defaultProps = {
    imagePosition: 'right',
    iconType: 'small',
    linksTo: '/',
    extraImageName: '',
  };
  constructor(props) {
    super(props);
    this.gradients = {
      lightblue: 'linear-gradient(135deg, #0EDBF2 0%, #0E3FF2 100%)',
      darkblue: 'linear-gradient(135deg, #0E3FF2 0%, #780EF2 100%)',
      pink: 'linear-gradient(135deg, #780EF2 0%, #F20E91 100%)',
      orange: 'linear-gradient(135deg, #F20E91 0%, #F2CE0E 100%)',
      white: 'none',
    };
    this.imageContainerStyles = {
      backgroundImage: `url(./images/${this.props.imageName})`,
      backgroundSize: this.props.backgroundSize ? this.props.backgroundSize : 'cover',
      backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
    };
    this.textContainerStyles = {
      backgroundImage: this.gradients[this.props.gradient],
    };
  }

  getIcons(type) {
    if (!this.props.icons) {
      return '';
    }
    return this.props.icons.map(iconName => (<img key={iconName} className={`${type === 'big' ? 'big' : 'small'}Icon`} src={`./images/${iconName}`} alt={iconName} />
    ));
  }

  render() {
    return (
      <div id={this.props.id ? this.props.id : ''} className={`${s.infoBoxRow} ${(this.props.imagePosition === 'right' ? 'infobox-image-right' : 'infobox-image-left')}`} >
        <div className={s.textContainer} style={this.textContainerStyles} >
          <h2 className={s.title} style={{ color: (this.props.textColor ? this.props.textColor : '#fff') }}>{this.props.titleText}</h2>
          <p className={s.content} style={{ color: (this.props.textColor ? this.props.textColor : '#fff') }}>{this.props.contentText}</p>
          {this.props.buttonText &&
          <Link to={this.props.linksTo} className={s.button}>
            {this.props.buttonText}</Link>}
          {this.getIcons(this.props.iconType)}
        </div>
        <div className={s.imageContainer} style={this.imageContainerStyles}>
          {this.props.extraImageName && <img src={`./images/${this.props.extraImageName}`} alt={this.props.extraImageName} />}
        </div>
      </div>
    );
  }

}

export default InfoBox;
