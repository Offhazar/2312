import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enterenNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeNudler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSumbitNudler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    console.log(enteredName);
  };

  const nameInputClasses = enterenNameIsValid
    ? 'form-control'
    : 'form-control error-text';
  return (
    <form onSubmit={formSumbitNudler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeNudler} />
        {!enterenNameIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
