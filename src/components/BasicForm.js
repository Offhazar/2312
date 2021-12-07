import React from 'react';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: lastInputError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastInputBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: entereEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastIsValid && entereEmailIsValid) {
    formIsValid = true;
  }

  const formSumbitNudler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputError
    ? 'form-control error-text'
    : 'form-control';
  const lastInputClasses = lastInputError
    ? 'form-control error-text'
    : 'form-control';
  const emailInputClasses = emailInputError
    ? 'form-control error-text'
    : 'form-control';
  return (
    <form onSubmit={formSumbitNudler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={nameInputBlurHandler}
            onChange={nameChangeHandler}
            type="text"
            id="name"
            value={enteredName}
          />
          {nameInputError && <p>Имя не должно быть пустым</p>}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onBlur={lastInputBlurHandler}
            onChange={lastChangeHandler}
            value={enteredLast}
            type="text"
            id="name"
          />
          {lastInputError && <p>Фамилия не должна быть пустым</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
        {emailInputError && (
          <p>Электронная почта не должна быть пустым и должен соддержать '@'</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
