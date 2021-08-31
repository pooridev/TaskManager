import { FC, useState } from 'react';
import NewTask from './NewTask';
import Avatar from './Avatar';
import styles from './Sidebar.module.css';
import Actions from './Actions';
import Lists from './Lists';

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdownHandler = () => setIsOpen(true);
  const closeDropdownHandler = () => setIsOpen(false);

  return (
    <nav className={styles['Sidebar']}>
      <Avatar />
      <NewTask
        onClose={closeDropdownHandler}
        isOpen={isOpen}
        onOpen={openDropdownHandler}
      />
      <Actions />
      <Lists />
    </nav>
  );
};

export default Sidebar;
