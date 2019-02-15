import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header className="login-form-header">
            <h1>{this.props.formType}</h1>
            <br />
            {this.props.navLink}
          </header>
          <section className="login-form-body">
            {this.props.errors.length > 0 && this.renderErrors()}
            <div className="login-form">
              <label htmlFor="email">Email:</label>
              <input type="text"
                  id="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="text-input"
                />
              <label htmlFor="password">Password:</label>
              <input type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="text-input"
                />
              <button type="submit" value={this.props.formType}>
                {this.props.formType}
              </button>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
