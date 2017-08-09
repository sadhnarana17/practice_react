import React from 'react';
import SendCv from '../../components/CvForm/SendCv';

function ShowCvButton({ buttontext }) {
  return (
    <SendCv btntext={buttontext} />
  );
}

export default ShowCvButton;
