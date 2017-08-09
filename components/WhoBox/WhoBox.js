import React from 'react';
import s from './WhoBox.css';

class WhoBox extends React.Component {
  static defaultProps = {
    id: '',
    imagePosition: 'right',
    text: '',
    imageName: '',
    photoName: '',
  };

  constructor(props) {
    super(props);
    this.photoStyles = {
      backgroundImage: `url(./images/${this.props.photoName})`,
    };
  }

  render() {
    return (
      <div id={this.props.id ? this.props.id : ''} className={`${s.whoboxRow} ${(this.props.imagePosition === 'right' ? 'whobox-image-right' : 'whobox-image-left')}`} >
        <div className={s.textContainer} >
          <img src={`./images/${this.props.logoName}`} alt={this.props.logoName} />
          <p className={s.text}>{`'${this.props.text}'`}</p>
          <div className={s.photoContainer} >
            <div className={s.photo} style={this.photoStyles} />
            <div className={s.nameContainer} >
              <h5 className={s.name} >{this.props.name}</h5>
              <span className={s.title} >{this.props.title}</span>
            </div>
          </div>
        </div>
        <div className={s.imageContainer} >
          <img src={`./images/${this.props.imageName}`} alt={this.props.imageName} />
        </div>
      </div>
    );
  }
}

export default WhoBox;
