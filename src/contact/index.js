import React from 'react';
import Select from 'react-select';
import Slider from 'react-rangeslider';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer/Footer';
import history from '../../src/history';

import s from './contact.css';

import {
  title, subtitle, rangeTitle, range1, range2,
  range3, range4, range5, range6, range1text, range2text,
  range3text, range4text, range5text, range6text, servicesTitle,
  service1, service2, service3, service4,
  service5, service6, contactTitle } from './contact.md';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'morning', label: 'Morning' },
      { value: 'afternoon', label: 'Afternoon' },
      { value: 'evening', label: 'Evening' },
    ];
    this.tooltipTexts = {
      0: range1text,
      1: range2text,
      2: range3text,
      3: range4text,
      4: range5text,
      5: range6text,
    };
    this.labels = {
      0: range1,
      1: range2,
      2: range3,
      3: range4,
      4: range5,
      5: range6,
    };
    this.currentLabels = {
      0: range1,
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    };
    this.state = {
      rangeValue: 0,
      timeSelected: false,
      dropdownValue: null,
      saving: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onTimeSelect = (val) => {
    this.setState({
      timeSelected: true,
      dropdownValue: val,
    });
  };

  updateCurrentLabel = (val) => {
    const result = {};
    Object.keys(this.currentLabels).forEach((key) => {
      if (parseInt(key, 10) === val) {
        result[key] = this.labels[key];
      } else {
        result[key] = '';
      }
    });
    this.currentLabels = result;
  };

  formatter = val => (this.tooltipTexts[val]);

  rangeChange = (val) => {
    this.setState({
      rangeValue: val,
    });
    this.updateCurrentLabel(val);
  };

  submitForm = (e) => {
    e.preventDefault();

    this.setState({
      saving: true,
    });

    fetch('/thankyou', {
      method: 'post',
      body: new FormData(this.form),
    }).then(() => {
      history.push('/thankyou');
      window.scrollTo(0, 0);
      this.setState({
        saving: false,
      });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.submitForm} name="websiteContactForm" method="POST" action="/how" data-netlify="true" data-netlify-honeypot="hiddenField" ref={(form) => { this.form = form; }}>
          <input type="hidden" name="hiddenField" />
          <input type="hidden" name="form-name" value="websiteContactForm" />
          <h1 className={s.title}>{title}</h1>
          <p className={s.subtitle}>{subtitle}</p>
          <h4 className={s.sectionTitle}>{rangeTitle}</h4>
          <input name="sliderValue" type="hidden" value={this.state.rangeValue} />
          <Slider
            className={s.slider}
            value={this.state.rangeValue} onChange={this.rangeChange}
            min={0} max={5} step={1} format={this.formatter}
            labels={this.currentLabels}
          />
          <div className={s.separator} />
          <h4 className={s.sectionTitle}>{servicesTitle}</h4>
          <div className={s.servicesContainer}>
            <input type="hidden" value="false" name="appDevelopmentServices" />
            <input className={s.checkbox} id="appDevelopment" name="appDevelopmentServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="appDevelopment">{service1}</label>
            <input type="hidden" value="false" name="webDevelopmentServices" />
            <input className={s.checkbox} id="webDevelopment" name="webDevelopmentServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="webDevelopment">{service2}</label>
            <input type="hidden" value="false" name="productStrategyServices" />
            <input className={s.checkbox} id="productStrategy" name="productStrategyServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="productStrategy">{service3}</label>
            <input type="hidden" value="false" name="brandIdentityServices" />
            <input className={s.checkbox} id="brandIdentity" name="brandIdentityServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="brandIdentity">{service4}</label>
            <input type="hidden" value="false" name="marketingServices" />
            <input className={s.checkbox} id="marketing" name="marketingServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="marketing">{service5}</label>
            <input type="hidden" value="false" name="otherServices" />
            <input className={s.checkbox} id="other" name="otherServices" value="true" type="checkbox" />
            <label className={s.checkboxLabel} htmlFor="other">{service6}</label>
          </div>
          <div className={s.separator} />
          <h4 className={s.sectionTitle}>{contactTitle}</h4>
          <div className={`${s.formContainer} ${this.state.timeSelected ? 'timeSelected' : ''}`}>
            <input name="firstName" required placeholder="First Name" className={s.formInput} type="text" />
            <input name="lastName" required placeholder="Last Name" className={s.formInput} type="text" />
            <input name="phone" required placeholder="Phone number" className={s.formInput} type="text" />
            <Select placeholder="Best time to contact" searchable={false} name="contactTime" value={this.state.dropdownValue} options={this.options} className={s.dropdown} onChange={this.onTimeSelect} />
            <textarea name="description" placeholder="Tell us more (optional)" className={s.textArea} />
            {!this.state.saving && <button type="submit" className={s.submit}>Submit</button>}
            {this.state.saving && <span className={s.spinner} />}
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
