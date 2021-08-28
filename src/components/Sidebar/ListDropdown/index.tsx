import { FC, useRef } from 'react';
import styles from './ListDropdown.module.css';
import useOutsideClickHandler from './../../../hooks/useOutsideClickHandler';

interface Props {
  onClose: () => void;
}

const ListDropdown: FC<Props> = ({ onClose }) => {
  const dropdownRef = useRef(null);

  useOutsideClickHandler(dropdownRef, onClose);

  return (
    <div className={styles['Dropdown']} role='menu' ref={dropdownRef}>
      <div className={styles['Option']}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='#8A8F98'>
          <path d='M1 3C1 1.89543 1.89543 1 3 1H9C10.1046 1 11 1.89543 11 3V3.5H6C4.61929 3.5 3.5 4.61929 3.5 6V11H3C1.89543 11 1 10.1046 1 9V3Z'></path>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7ZM10 10C10.9665 10 11.5 9.2165 11.5 8.25C11.5 7.2835 10.9665 6.5 10 6.5C9.0335 6.5 8.5 7.2835 8.5 8.25C8.5 9.2165 9.0335 10 10 10ZM7 12.5616C7 11.5144 7.9841 10.746 9 11C9.47572 11.7136 10.5243 11.7136 11 11C12.0159 10.746 13 11.5144 13 12.5616V13.0101C13 13.2806 12.7806 13.5 12.5101 13.5H7.48995C7.21936 13.5 7 13.2806 7 13.0101V12.5616Z'></path>
        </svg>
        <span>Calistu</span>
      </div>
      <div className={styles['Option']}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='#8A8F98'>
          <path d='M1 3C1 1.89543 1.89543 1 3 1H9C10.1046 1 11 1.89543 11 3V3.5H6C4.61929 3.5 3.5 4.61929 3.5 6V11H3C1.89543 11 1 10.1046 1 9V3Z'></path>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7ZM10 10C10.9665 10 11.5 9.2165 11.5 8.25C11.5 7.2835 10.9665 6.5 10 6.5C9.0335 6.5 8.5 7.2835 8.5 8.25C8.5 9.2165 9.0335 10 10 10ZM7 12.5616C7 11.5144 7.9841 10.746 9 11C9.47572 11.7136 10.5243 11.7136 11 11C12.0159 10.746 13 11.5144 13 12.5616V13.0101C13 13.2806 12.7806 13.5 12.5101 13.5H7.48995C7.21936 13.5 7 13.2806 7 13.0101V12.5616Z'></path>
        </svg>
        <span>Learning</span>
      </div>
    </div>
  );
};

export default ListDropdown;
