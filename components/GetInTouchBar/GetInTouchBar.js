import React from 'react';
import s from './GetInTouchBar.css';
import Link from '../Link/Link';

function GetInTouchBar(props) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{props.title}</h3>
      <Link to={props.linksTo ? props.linksTo : '/'} className={s.button}>{props.buttonText}</Link>
    </div>
  );
}

export default GetInTouchBar;
