import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
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

  const emailInputClasses = emailInputEmailError
    ? 'form-control error-text'
    : 'form-control';
  return (
    <form onSubmit={formSumbitNudler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {nameInputError && <p>Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          onBlur={emailInputBlurHandler}
          type="text"
          id="name"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailInputEmailError && <p>Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
