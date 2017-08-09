import React from 'react';
import s from './HomepageTopImage.css';
import Link from '../Link/Link';
import { colorized, nonColorized, subtitle, button } from './HomepageTopImage.md';

class HomepageTopImage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={s.ucTopContainer} >
        <h1 className={s.title}>
          <span className={s.colorized}>
            {colorized}
          </span>
          { ` ${nonColorized}` }
        </h1>
        <p className={s.subtitle}>{subtitle}</p>
        <Link to="/contact" className={s.button}>{button}</Link>
      </div>
    );
  }
}

export default HomepageTopImage;
