import { useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

export const WelcomeComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleToggle}>
        {isLogin ? 'Switch to Registration' : 'Switch to Login'}
      </button>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};
