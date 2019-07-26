import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to Unify!
          <br/>
          Please Sign Up to continue or {this.props.navLink}
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>Email Address:
              <input type="text"
                value={this.state.email_address}
                onChange={this.update('email_address')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br/>
            <input className="signup-submit" type="submit" value="signup" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;