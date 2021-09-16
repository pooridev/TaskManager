import { FC, useRef } from 'react';

import styles from './Menu.module.css';
import Icon from './../Icon';
import useOutsideClickHandler from '../../hooks/useOutsideClickHandler';

interface Props {
  secondRef: any;
  options: Array<any>;
  isOpen: boolean;
  fallbackText?: string;
  onClose: () => void;
}

const Menu: FC<Props> = props => {
  const { isOpen, options, fallbackText, onClose, secondRef } = props;

  const menuRef = useRef(null);
  useOutsideClickHandler(menuRef, secondRef, onClose);

  return (
    <div
      className={`${styles['Menu']} ${isOpen ? styles['Open'] : ''}`}
      role='menu'
      ref={menuRef}>
      {options.length ? (
        options.map((item: any) => (
          <div className={styles['Option']}>
            <Icon iconName={item['iconName']} />
            <span>{item['title']}</span>
          </div>
        ))
      ) : (
        <div className={styles['Option']}>
          <span>{fallbackText}</span>
        </div>
      )}
    </div>
  );
};

export default Menu;
