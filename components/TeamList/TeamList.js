import React from 'react';
import s from './TeamList.css';
import { name1, name2, name3, name4, name5, name6, title1, title2, title3, title4, title5, title6 } from './TeamList.md';

function TeamList() {
  return (
    <ul className={s.list}>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-matt.jpg)' }} />
        <h4 className={s.name}>{name1}</h4>
        <span className={s.title}>{title1}</span>
      </li>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-dan.jpg)' }} />
        <h4 className={s.name}>{name2}</h4>
        <span className={s.title}>{title2}</span>
      </li>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-pawel.jpg)' }} />
        <h4 className={s.name}>{name3}</h4>
        <span className={s.title}>{title3}</span>
      </li>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-pete.jpg)' }} />
        <h4 className={s.name}>{name4}</h4>
        <span className={s.title}>{title4}</span>
      </li>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-vishal.jpg)' }} />
        <h4 className={s.name}>{name5}</h4>
        <span className={s.title}>{title5}</span>
      </li>
      <li className={s.listItem} >
        <div className={s.photo} style={{ backgroundImage: 'url(./images/member-przemek.jpg)' }} />
        <h4 className={s.name}>{name6}</h4>
        <span className={s.title}>{title6}</span>
      </li>
    </ul>
  );
}

export default TeamList;
