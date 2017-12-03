import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';

export default function requireAuthentication(Component) {
  class AuthenticateComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      console.log('user: ', this.props);
      if (!this.props.user || !this.props.user.hasOwnProperty('data')) {
        const redirectAfterLogin = this.props.location.pathname;
        history.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      return (
        <div>
          { this.props.user && this.props.user.hasOwnProperty('data') && <Component {...this.props} /> }
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    user: state.user
  });
  return connect(mapStateToProps)(AuthenticateComponent);
}
