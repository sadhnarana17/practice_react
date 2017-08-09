import React from 'react';
import s from './UCList.css';
import { t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 } from './UCList.md';

function UCList() {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>{t1}</li>
      <li className={s.listItem}>{t2}</li>
      <li className={s.listItem}>{t3}</li>
      <li className={s.listItem}>{t4}</li>
      <li className={s.listItem}>{t5}</li>
      <li className={s.listItem}>{t6}</li>
      <li className={s.listItem}>{t7}</li>
      <li className={s.listItem}>{t8}</li>
      <li className={s.listItem}>{t9}</li>
      <li className={s.listItem}>{t10}</li>
    </ul>
  );
}

export default UCList;
