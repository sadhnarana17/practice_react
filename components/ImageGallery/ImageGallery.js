import React from 'react';
import s from '../../src/career/career.css';

function ImageGallery({ images }) {
  return (
    <div className={s.careergallery}>
      {images.map(data =>
        <img alt="dummy" className={(data.show === 'no' ? s.hiddenmobile : 'showimage')} src={data.image} />)}
    </div>
  );
}

export default ImageGallery;

