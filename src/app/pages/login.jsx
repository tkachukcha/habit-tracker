import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/ui/registerForm';
import LoginForm from '../components/ui/loginForm';

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === 'register' ? type : 'login'
  );
  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    );
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === 'register' ? (
            <>
              <h3 className="mb-4">Register</h3>
              <RegisterForm />
              <p className="mt-2">
                Already have an account?
                <a
                  role="button"
                  className="text-primary p-1"
                  onClick={toggleFormType}
                >
                  Log In
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Login</h3>
              <LoginForm />
              <p className="mt-2">
                Don`t have an account?
                <a
                  role="button"
                  className="text-primary p-1"
                  onClick={toggleFormType}
                >
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
