import { useState, } from 'react';

export const useBooleanValue = initialValue => {
  const [booleanValue, setBooleanValue] = useState(initialValue);
  const onBooleanChange = () => setBooleanValue(!booleanValue);

  return { booleanValue, onBooleanChange };
};
