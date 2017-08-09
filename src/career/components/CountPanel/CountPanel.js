import React from 'react';
import s from '../../../../src/career/career.css';

function CountPanel(props) {
  return (
    <div className={s.ucreatecountpanel}>
      <div className={s.countblock}>
        <span className={s.count}>{props.employee}</span><br />
        <span className={s.info}>Employees</span>
      </div>
      <div className={s.countblock}>
        <span className={s.count}>{props.startups}</span><br />
        <span className={s.info}>Startups</span>
      </div>
      <div className={s.countblock}>
        <span className={s.count}>{props.cupsOfCoffee}</span><br />
        <span className={s.info}>Cups of Coffee</span>
      </div>
      <div className={s.countblock}>
        <span className={s.count}>{props.snake}</span><br />
        <span className={s.info}>Snake</span>
      </div>
    </div>
  );
}

export default CountPanel;

