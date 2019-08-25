import { useState, } from 'react';

export const useRatingValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e, newValue) => setValue(newValue);

  return { value, onChange };
};
