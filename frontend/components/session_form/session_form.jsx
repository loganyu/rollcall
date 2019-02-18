import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    return (
      <ul className="errors-container">
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, errors, navLink } = this.props;
    const { name, email, password} = this.state;

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header className="login-form-header">
            <h1>{formType}</h1>
            <br />
            {navLink}
          </header>
          <section className="login-form-body">
            {errors.length > 0 && this.renderErrors()}
            <div className="login-form">
              <label htmlFor="email">Email:</label>
              <input type="email"
                  id="email"
                  value={email}
                  onChange={this.update('email')}
                  className="text-input"
                  autoComplete="email"
                />
              {formType === 'Sign Up' &&
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text"
                    id="name"
                    value={name}
                    onChange={this.update('name')}
                    className="text-input"
                    autoComplete="name"
                  />
                </div>
              }
              <label htmlFor="password">Password:</label>
              <input type="password"
                  id="password"
                  value={password}
                  onChange={this.update('password')}
                  className="text-input"
                  autoComplete="current-password"
                />
              <button type="submit" value={formType}>
                {formType}
              </button>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
