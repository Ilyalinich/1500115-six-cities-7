import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/api-action';
import Header from '../../ui/header/header';


function SignIn () {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const authData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(login(authData));
  };

  const setEmailValidation = () => {
    const emailInput = emailRef.current;
    let validationMessage = '';

    if (emailRef.current.validity.patternMismatch) {
      validationMessage = 'Заполните адрес электронной почты в соответствии с указанным примером. Пример корректного адреса: info@wikipedia.org';
    } else if (emailRef.current.validity.valueMissing) {
      validationMessage = 'Заполните это поле';
    } else {
      validationMessage = '';
    }

    emailInput.setCustomValidity(validationMessage);
  };


  const setPasswordValidation = () => {
    const passwordInput = passwordRef.current;
    let validationMessage = '';

    if (passwordInput.value && !passwordInput.value.split('').find((symbol) => symbol !== ' ')) {
      validationMessage = 'Пароль не должен состоять только из пробелов';
    }

    passwordInput.setCustomValidity(validationMessage);
    passwordInput.reportValidity();
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title" data-testid="form title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                  pattern="([A-Za-z0-9_.-]{1,})@([A-Za-z0-9_.-]{1,}\.)([A-Za-z]{2,8})"
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onInput={setPasswordValidation}
                  required
                  data-testid="password"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={setEmailValidation}
                data-testid="submit button"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="#"
                style={{
                  cursor: 'default',
                  pointerEvents: 'none',
                }}
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default SignIn;
