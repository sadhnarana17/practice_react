import React from 'react';
import s from './TextSection.css';
import CurrentPosition from
'../../src/career/components/CurrentPosition/CurrentPosition';
import CountPanel from '../../src/career/components/CountPanel/CountPanel';
import ShowCvButton from '../../components/CvForm/ShowCvButton';

function TextSection(props) {
  const background = {
    light: '#fff',
    dark: '#f1f7f8',
  };

  return (
    <div id={props.id ? props.id : ''} className={(location.pathname !== '/career') ? `${s.container}  ${s.containerMaxWidth}` : `${s.container} ${s.containerMaxWidth}  ${s.carrerTextSection}`} style={{ backgroundColor: (background[props.background] ? background[props.background] : '#fff') }}>
      <h2 id={props.positionID ? props.positionID : ''} className={s.title}>{props.title}</h2>
      <p className={s.text} style={{ textAlign: (props.textAlign ? props.textAlign : 'left') }}>{props.text}</p>
      {props.children}
      {(props.checkPosition) ?
        <div>
          <CurrentPosition /><div className={s.cvcontent}><p className={s.text} style={{ textAlign: (props.textAlign ? props.textAlign : 'left') }}>{props.positionText}</p><ShowCvButton buttontext={props.showCvText} /></div></div> : ''}
      {(props.checkCountPanel) ? <div> <CountPanel employee={85} startups={18} cupsOfCoffee={'99k'} snake={1} /></div> : ''}
    </div>
  );
}

export default TextSection;

