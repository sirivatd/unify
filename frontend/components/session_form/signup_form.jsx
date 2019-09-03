import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
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
      <ul className="error-section">
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
          <h1 className="signup-header">The college marketplace reimagined.</h1>
          <h3 className="signup-description">
            Unify lets you buy and sell items right on your campus.
          </h3>
          <div className="signup-form">
            <div className="name-inputs">
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="signup-first-name-input"
                  placeholder="First name"
                />
              <br/>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="signup-last-name-input"
                  placeholder="Last name"
                />
                <br/>
            </div>
  
            <input type="text"
              value={this.state.email_address}
              onChange={this.update('email_address')}
              className="signup-email-input"
              placeholder="Email address"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-password-input"
              placeholder="Password"
            />
            <br/>
            <p className="dont-have-an-account-link">Already have an account? {this.props.navLink}</p>
            <br/>
            {this.renderErrors()}
            <br/>
            <input className="session-submit" type="submit" value="Continue" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;