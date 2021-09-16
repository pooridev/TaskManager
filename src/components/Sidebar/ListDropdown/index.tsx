import { FC, useRef } from 'react';
import styles from './ListDropdown.module.css';
import useOutsideClickHandler from './../../../hooks/useOutsideClickHandler';
import { useSelector, RootStateOrAny } from 'react-redux';
import Icon from '../../../shared/Icon';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  newTaskRef?: any;
}

const ListDropdown: FC<Props> = ({ onClose, isOpen, newTaskRef }) => {
  const dropdownRef = useRef(null);
  useOutsideClickHandler(dropdownRef, newTaskRef, onClose);

  const { lists } = useSelector((state: RootStateOrAny) => state);

  return (
    <div
      className={`${styles['Dropdown']} ${isOpen ? styles['Open'] : ''}`}
      role='menu'
      ref={dropdownRef}>
      {lists.length ? (
        lists.map((list: { title: string }) => (
          <div className={styles['Option']}>
            <Icon iconName='profile' />
            <span>{list['title']}</span>
          </div>
        ))
      ) : (
        <div className={styles['Option']}>
          <span>create new list</span>
        </div>
      )}
    </div>
  );
};

export default ListDropdown;
