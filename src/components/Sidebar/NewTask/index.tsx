import { FC, useRef } from 'react';
import Icon from '../../../shared/Icon';
import ListDropdown from '../ListDropdown';
import styles from './NewTask.module.css';

export interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NewTask: FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const newTaskRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles['NewTask']} ref={newTaskRef}>
      <div className={styles['NewTaskButtonWrapper']}>
        <button className={styles['NewTaskButton']}>
          <Icon iconName='writing' />
          New task
        </button>
      </div>
      <div className={styles['SelectList']} onClick={isOpen ? onClose : onOpen}>
        <button className={styles['SelectListButton']}>
          <Icon iconName='arrowDown' />
        </button>
      </div>
      <ListDropdown newTaskRef={newTaskRef} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default NewTask;
