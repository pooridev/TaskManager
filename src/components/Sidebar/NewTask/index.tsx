import { FC } from 'react';
import ListDropdown from '../ListDropdown';
import styles from './NewTask.module.css';

export interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NewTask: FC<Props> = ({ isOpen, onOpen, onClose }) => {
  return (
    <div className={styles['NewTask']}>
      <div className={styles['NewTaskButtonWrapper']}>
        <button className={styles['NewTaskButton']}>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            xmlns='http://www.w3.org/2000/svg'
            fill='#8A8F98'>
            <path d='M13.7826 2.26359C14.1313 1.69123 14.0606 0.931152 13.5705 0.434915C13.0757 -0.0660681 12.3153 -0.134235 11.7483 0.230412C12.2123 1.09277 12.9198 1.79999 13.7826 2.26359Z'></path>
            <path d='M10.8171 1.11829L5.78472 6.18C6.77457 6.47517 7.57699 7.21908 7.95006 8.18198L12.9064 3.20208C12.0535 2.68436 11.3369 1.9696 10.8171 1.11829Z'></path>
            <path d='M6.91486 9.17614C6.80538 8.1186 5.91913 7.30487 4.8592 7.29183C4.53827 7.92804 4.21105 8.90848 4.01729 9.53109C3.93355 9.80017 4.16675 10.0527 4.44262 9.99047C5.16831 9.82683 6.36057 9.52165 6.91486 9.17614Z'></path>
            <path d='M3.75 1C1.67893 1 0 2.67893 0 4.75V10.25C0 12.3211 1.67893 14 3.75 14H9.25009C11.3212 14 13.0001 12.3211 13.0001 10.25V7C13.0001 6.58579 12.6643 6.25 12.2501 6.25C11.8359 6.25 11.5001 6.58579 11.5001 7V10.25C11.5001 11.4926 10.4927 12.5 9.25009 12.5H3.75C2.50736 12.5 1.5 11.4926 1.5 10.25V4.75C1.5 3.50736 2.50736 2.5 3.75 2.5H6C6.41421 2.5 6.75 2.16421 6.75 1.75C6.75 1.33579 6.41421 1 6 1H3.75Z'></path>
          </svg>
          New task
        </button>
      </div>
      <div className={styles['SelectList']} onClick={onOpen}>
        <button className={styles['SelectListButton']}>
          <svg width='13' height='9' viewBox='0 0 13 9' fill='currentcolor'>
            <path
              d='M10.1611 0.314094L5.99463 4.48054L1.82819 0.314094C1.4094 -0.104698 0.732886 -0.104698 0.314094 0.314094C-0.104698 0.732886 -0.104698 1.4094 0.314094 1.82819L5.24295 6.75705C5.66175 7.17584 6.33825 7.17584 6.75705 6.75705L11.6859 1.82819C12.1047 1.4094 12.1047 0.732886 11.6859 0.314094C11.2671 -0.0939598 10.5799 -0.104698 10.1611 0.314094Z'
              transform='translate(0.77832 0.998535)'></path>
          </svg>
        </button>
      </div>
      {isOpen && <ListDropdown onClose={onClose} />}
    </div>
  );
};

export default NewTask;
