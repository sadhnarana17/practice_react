import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux';
import Link from '../Link/Link';
import s from './Navigation.css';

const mapStateToProps = state => ({
  isNavActive: state.mobileNavVisible,
});

const mapDispatchToProps = dispatch => ({
  onClick: (e) => {
    if (e) {
      // e.preventDefault();
      dispatch({
        type: 'TOGGLE_NAV',
      });
    }
  },
});

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={s.navContainer}>
        <nav className="mdl-navigation" ref={(node) => { this.root = node; }}>
          <Link isNavigationLink className={`mdl-navigation__link ${s.link}`} to="/why">Why</Link>
          <Link isNavigationLink className={`mdl-navigation__link ${s.link}`} to="/what">What</Link>
          <Link isNavigationLink className={`mdl-navigation__link ${s.link}`} to="/how">How</Link>
          <Link isNavigationLink className={`mdl-navigation__link ${s.link}`} to="/who">Who</Link>
          <Link isNavigationLink className={`mdl-navigation__link ${s.link}`} to="/contact" secondaryRoute="/thankyou">Contact</Link>
        </nav>
        <nav>
          <button onClick={this.props.onClick} className={s.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </nav>
        <ReactTransitionGroup component="ul" className={`${s.mobileNav} ${this.props.isNavActive ? 'nav-active' : ''}`} >
          <Link onClick={this.props.onClick} className={`mdl-navigation__link ${s.link}`} to="/why">Why</Link>
          <Link onClick={this.props.onClick} className={`mdl-navigation__link ${s.link}`} to="/what">What</Link>
          <Link onClick={this.props.onClick} className={`mdl-navigation__link ${s.link}`} to="/how">How</Link>
          <Link onClick={this.props.onClick} className={`mdl-navigation__link ${s.link}`} to="/who">Who</Link>
          <Link onClick={this.props.onClick} className={`mdl-navigation__link ${s.link}`} to="/contact">Contact</Link>
        </ReactTransitionGroup>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
