import React from 'react';
import '../../styles/Style.css';
import LoginForm from './LoginForm';

class LoginView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      <LoginForm />
    </div>
    );
  }
}

export default LoginView;