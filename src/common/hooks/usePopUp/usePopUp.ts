// Libraries
import { useEffect, useRef, useState } from 'react';

function usePopUp() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const popUpRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function togglePopUpVisibility() {
    setIsPopUpVisible((prev) => !prev);
  }

  function handleDocumentClick(event: any) {
    if (!popUpRef.current || !buttonRef.current) {
      return;
    }
    if (!popUpRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsPopUpVisible(false);
    }
  }

  useEffect(() => {
    if (isPopUpVisible) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isPopUpVisible]);

  return { togglePopUpVisibility, popUpRef, isPopUpVisible, buttonRef };
}

export { usePopUp };