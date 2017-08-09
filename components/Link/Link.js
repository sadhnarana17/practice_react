import React from 'react';
import { connect } from 'react-redux';
import history from '../../src/history';

const mapStateToProps = (state, ownProps) => ({
  isActive: state.routeName === ownProps.to || state.routeName === ownProps.secondaryRoute,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: (event) => {
    if (ownProps.onClick) {
      ownProps.onClick(event);
    }

    if (event.button !== 0 /* left click */) {
      return;
    }

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();

    if (ownProps.to) {
      history.push(ownProps.to);
      dispatch({
        type: 'ROUTE_CHANGE',
        routeName: ownProps.to,
      });
    } else {
      history.push({
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search,
      });
    }
  },
});

class Link extends React.Component {
  static defaultProps = {
    isActive: false,
    isNavigationLink: false,
    secondaryRoute: '',
  };
  checkIfActive() {
    return (this.props.isNavigationLink && this.props.isActive) ? 'activeLink' : '';
  }

  render() {
    const { to, children, className } = this.props; // eslint-disable-line no-use-before-define
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return (
      <a className={`${className} ${this.checkIfActive()}`} href={typeof to === 'string' ? to : history.createHref(to)} onClick={this.props.handleClick} >
        {children}
      </a>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
