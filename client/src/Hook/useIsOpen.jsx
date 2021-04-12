import { useState, useCallback } from 'react';

const useInput = (initalValue = false) => {
  const [isOpen, setIsOpen] = useState(initalValue);

  const handler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return [isOpen, handler];
};

export default useInput;
