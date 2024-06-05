import { useState } from 'react';

export const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login: ${login}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Login:
          <input type="text" value={login} onChange={handleLoginChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

