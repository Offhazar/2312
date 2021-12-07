import React from 'react';
import { useState } from 'react/cjs/react.development';

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
