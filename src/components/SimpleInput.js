import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enterenNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredTouched, setEnteredTouched] = useState(false);
  const nameInputChangeNudler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSumbitNudler = (e) => {
    e.preventDefault();

    setEnteredTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);
  };

  const nameInputIsInvalid = !enterenNameIsValid && enteredTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
