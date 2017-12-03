import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup({
      email: this.state.username,
      password: this.state.password,
    });
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="username"
            onChange={e => this.setState({ username: e.target.value })}
            value={this.state.username}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
            placeholder="Password"
          />
        </Form.Field>

        <Button type="submit">Sign Up</Button>
      </Form>
    );
  }
}

export default SignupPage;
