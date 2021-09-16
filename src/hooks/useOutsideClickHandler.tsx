import { useEffect } from 'react';

const useOutsideClickHandler = (
  ref: any,
  secondRef: any,
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (evt: any) => {
      if (secondRef) {
        if (
          ref.current &&
          !ref.current.contains(evt.target) &&
          !secondRef.current.contains(evt.target)
        ) {
          callback();
        }
        return;
      }

      if (ref.current && !ref.current.contains(evt.target)) {
        callback();
        return;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClickHandler;
