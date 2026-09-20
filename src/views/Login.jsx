import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle ? <LoginForm /> : <RegisterForm />}
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Login;