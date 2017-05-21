import React from 'react';
import TextGroup from '../others/TextGroup';
import '../../styles/Style.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
      /*this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );*/
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <TextGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Sign Up</button></div>
      </form>
    );
  }
}

export default SignUpForm;