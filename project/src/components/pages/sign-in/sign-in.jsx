import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../../store/api-action';
import Header from '../../ui/header/header';


function SignIn ({onSubmit}) {
  const emailRef = useRef();
  const passwordRef = useRef();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
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

  // const resetEmailValidation = () => {
  //   emailRef.current.setCustomValidity('');
  //   emailRef.current.reportValidity();
  // };

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
            <h1 className="login__title">Sign in</h1>
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
                  // onInput={resetEmailValidation}
                  pattern="([A-Za-z0-9_.-]{1,})@([A-Za-z0-9_.-]{1,}\.)([A-Za-z]{2,8})"
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
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={setEmailValidation}
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


SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});


export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
