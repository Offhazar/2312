import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredTouched, setEnteredTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  const nameInputChangeNudler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredTouched(true);
  };

  const formSumbitNudler = (e) => {
    e.preventDefault();

    setEnteredTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');

    console.log(enteredName);
    setEnteredTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
          onChange={nameInputChangeNudler}
        />
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
