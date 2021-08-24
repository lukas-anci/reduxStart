import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // susikurti state abiems inputams ir gauti ivestas reiksmes
  // 00 palengvinimas dispatch(authActions.login()); tik jei inputu duomenys atitinka user

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // auth.jsx ivygdyti login veiksma is mussu authSlice reducers
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    console.log('login is happining');

    const user = {
      email: email,
      password: password,
    };

    dispatch(authActions.login(user));
  };
  return (
    <main className={classes.auth}>
      <section>
        <form autoComplete="off" onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={emailHandler}
              value={email}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={passwordHandler}
              value={password}
              type="password"
              id="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
