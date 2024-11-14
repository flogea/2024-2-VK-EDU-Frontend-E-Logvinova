import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useDebounce = (value, delay) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return inputValue;
};

useDebounce.PropTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};
