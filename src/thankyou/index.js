import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import s from './thankyou.css';

function ThankYouPage() {
  return (
    <div>
      <Header />
      <main className={s.container} >
        <h1 className={s.title}>Thank you!</h1>
        <p className={s.subtitle}>We&#44;ll contact you in no time.</p>
      </main>
      <Footer />
    </div>
  );
}

export default ThankYouPage;
