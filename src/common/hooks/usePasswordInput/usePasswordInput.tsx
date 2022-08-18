import { useState } from 'react';

function usePasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleTogglePasswordVisible() {
    setIsPasswordVisible((value) => !value);
  }

  return { isPasswordVisible, handleTogglePasswordVisible };
}

export { usePasswordInput };
