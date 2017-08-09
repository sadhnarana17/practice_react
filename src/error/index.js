import React from 'react';
import history from '../history';
import Link from '../../components/Link/Link';
import s from './styles.css';

import { title } from './error.md';

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  };

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      'Page Not Found' : 'Error';
  }

  goBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    return (
      <div className={s.container}>
        <main className={s.content}>
          <img src="images/logo_outline.svg" alt="ucreate logo" />
          <h2 className={s.errorCode}>404</h2>
          <h3 className={s.title}>{title}</h3>
          <p className={s.subtitle}>
            If you&#44;re looking for our blog posts&#58; hang in there&#33;🙌
            We&#44;re migrating articles to Medium and it takes some time.
          </p>
          <Link to="/" className={s.button}>Back to home</Link>
          <p className={s.listTitle}>You can check out our social content:</p>
          <ul className={s.list}>
            <li className={s.listItem}><a href="https://www.facebook.com/ucreateit-404971796259264/?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li className={s.listItem}><a href="https://www.linkedin.com/company/ucreate-it" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className={s.listItem}><a href="https://twitter.com/uCreate_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li className={s.listItem}><a href="https://www.instagram.com/ucreate.it/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className={s.listItem}><a href="https://medium.com/product-problems" target="_blank" rel="noopener noreferrer">Medium</a></li>
          </ul>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
