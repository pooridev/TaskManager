import { useEffect } from 'react';

const useOutsideClickHandler = (ref: any, secondRef: any, callback: any):void => {
  useEffect(() => {
    const handleClickOutside = (evt: any) => {
      if (ref.current && !ref.current.contains(evt.target) && !secondRef.current.contains(evt.target)) {
        callback(); //Do what you want to handle in the callback
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClickHandler;
