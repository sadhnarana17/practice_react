import React from 'react';
import s from '../../../../src/career/career.css';
import Link from '../../../../components/Link/Link';
import data from './position.json';

function CurrentPosition() {
  return (
    <div className={s.positionlist}>
      {data.map(position =>
        <Link to={position.linkto} className={s.position}>
          <h3>{position.name}</h3>
          <p>{position.address1}<br />{position.address2}</p>
          <span className={s.moreinfo}>More Info</span>
        </Link>)}
    </div>
  );
}

export default CurrentPosition;
