import React from 'react';
import s from '../../components/jobDescription/jobdescription.css';
import Link from '../Link/Link';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import images from './images.json';
import { first, second, third, fourth } from './aboutucreate.md';

function JobDescription(props) {
  return (
    <div>
      <div className={s.jobcontainer}>
        <div className={s.positionwrap}>
          <p><Link to="/career#openposition" className={s.backlink}>&#60; All positions</Link></p>
          <h1 className={s.positionhd}>{props.jobTitle}</h1>
          <div className={s.positioninfo}>
            <div className={s.block}>
              <h3>Mentored by</h3>
              <p>{props.mentoredBy}</p>
            </div>
            <div className={s.block}>
              <h3>Business area</h3>
              <p>{props.businessArea}</p>
            </div>
            <div className={s.block}>
              <h3>Location</h3>
              <p>{props.location}</p>
            </div>
            <div className={s.block}>
              <h3>Salary</h3>
              <p>{props.salary}</p>
            </div>
          </div>
          <p className={s.boltspacer}><img src="images/bolt.png" alt="ucreate" /></p>
          <h3>The fun stuff you&#39;ll actually be doing</h3>
          <ul>
            {props.funStuff.map(funstufftext =>
              <li>{funstufftext.text}</li>)}
          </ul>
          <h3>What we need and what you have:</h3>
          <ul>
            {props.whatNeed.map(whatneedtext =>
              <li>{whatneedtext.text}</li>)}
          </ul>
          <h3>Why you’ll love us:</h3>
          <ul>
            {props.whyLove.map(whylovetext =>
              <li>{whylovetext.text}</li>)}
          </ul>
          <p className={s.boltspacer}><img src="images/bolt.png" alt="ucreate" /></p>
          <h3>About ucreate</h3>
          <p>{first}</p>
          <p>{second}</p>
          <p>{third}</p>
          <p>{fourth}</p>
          <div className={s.btnrow}>
            <p className={s.textcenter}>Sound like your kind of thing?</p>
          </div>
        </div>
      </div>
      <ImageGallery images={images} />
    </div>
  );
}

export default JobDescription;
