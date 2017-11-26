import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {
  class AuthenticateComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user.hasOwnProperty('data')) {
        const redirectAfterLogin = this.props.location.pathname;
        browserHistory.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      return (
        <div>
          { this.props.user.hasOwnProperty('data') && <Component {...this.props} /> }
        </div>
      );
    }
  }

  const mapStateToProps = state => ({});
  return connect(mapStateToProps)(AuthenticateComponent);
}
