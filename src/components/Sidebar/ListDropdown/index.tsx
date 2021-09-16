import { FC, useRef } from 'react';
import styles from './ListDropdown.module.css';
import useOutsideClickHandler from './../../../hooks/useOutsideClickHandler';
import { useSelector, RootStateOrAny } from 'react-redux';
import Icon from '../../../shared/Icon';
import Menu from '../../../shared/Menu/Menu';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  newTaskRef?: any;
}

const NewListMenu: FC<Props> = ({ onClose, isOpen, newTaskRef }) => {
  const { lists } = useSelector((state: RootStateOrAny) => state);

  return (
    <Menu
      secondRef={newTaskRef}
      options={lists}
      isOpen={isOpen}
      fallbackText='create new list'
      onClose={onClose}
    />
  );
};

export default NewListMenu;
