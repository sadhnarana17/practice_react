import React from 'react';
import { connect } from 'react-redux';
import s from './Footer.css';
import Link from '../Link/Link';
import { title1, address1, address2, address3, address4, telephone, email,
  title2, india, cracow, title3, inputTitle, subscribeText, title4,
  facebook, linkedin, twitter, instagram, medium, invalidInput, emailSent } from './Footer.md';

const mapStateToProps = state => ({
  isValid: state.isEmailInputValid,
  wasSent: state.wasEmailSent,
});

const mapDispatchToProps = dispatch => ({
  updateInputState: (isValid, wasSent = false) => {
    dispatch({
      type: 'EMAIL_VALIDATION',
      isValid,
      wasSent,
    });
  },
});

class Footer extends React.Component {
  static defaultProps = {
    isValid: true,
    wasSent: false,
  };
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-useless-escape
    this.expression = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.validateInput = (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      if (this.textInput.value === '') {
        this.props.updateInputState(true);
        return false;
      }
      if (this.expression.test(this.textInput.value)) {
        this.props.updateInputState(true);
        return true;
      }
      this.props.updateInputState(false);
      return false;
    };
    this.submitForm = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.validateInput()) {
        fetch(`${this.emailForm.getAttribute('action')}&EMAIL=${this.textInput.value}`, {
          method: 'GET',
        }).catch(() => {}).then(() => {
          this.textInput.value = '';
          this.props.updateInputState(true, true);
        });
      }
    };
  }


  render() {
    return (
      <footer className={s.footer}>
        <div className={s.column}>
          <h3 className={s.title}>{title1}</h3>
          <ul>
            <li>{address1}</li>
            <li>{address2}</li>
            <li>{address3}</li>
            <li>{address4}</li>
          </ul>
          <ul>
            <li>{telephone}</li>
            <li><a href={`mailto:${email}`}>{email}</a></li>
          </ul>
        </div>
        <div className={s.column}>
          <h3 className={s.title}>{title2}</h3>
          <p>{india}</p>
          <p>{cracow}</p>
        </div>
        <div className={s.column}>
          <h3 className={s.title}>{title3}</h3>
          <span>{inputTitle}</span>
          <form onSubmit={this.submitForm} ref={(form) => { this.emailForm = form; }} action="//ucreate.us11.list-manage.com/subscribe/post-json?u=89bb8e7d274e9480dc31f8829&amp;id=86a06d90ea&c=?" method="post" target="_blank">
            <input type="text" name="EMAIL" onChange={this.validateInput} className={`${s.input} ${(this.props.isValid ? '' : 'input-invalid')}`} ref={(input) => { this.textInput = input; }} />
            {!this.props.isValid && !this.props.wasSent && <p className="inputErrorMessage">{invalidInput}</p>}
            {this.props.wasSent && <p>{emailSent}</p>}
            <button type="submit" className={s.button}>{subscribeText}</button>
          </form>
        </div>
        <div className={s.column}>
          <h3 className={s.title}>{title4}</h3>
          <ul>
            <li><Link to="/career">Careers</Link></li>
            <li><a href="https://www.facebook.com/ucreateit-404971796259264/?fref=ts" target="_blank" rel="noopener noreferrer">{facebook}</a></li>
            <li><a href="https://www.linkedin.com/company/ucreate-it" target="_blank" rel="noopener noreferrer">{linkedin}</a></li>
            <li><a href="https://twitter.com/uCreate_" target="_blank" rel="noopener noreferrer">{twitter}</a></li>
            <li><a href="https://www.instagram.com/ucreate.it/" target="_blank" rel="noopener noreferrer">{instagram}</a></li>
            <li><a href="https://medium.com/product-problems" target="_blank" rel="noopener noreferrer">{medium}</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
