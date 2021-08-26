import { FC } from 'react';
import styles from './Sidebar.module.css';

export interface Props {}

const Sidebar: FC<Props> = () => {
  return <nav className={styles['Sidebar']}>sidebar</nav>;
};

export default Sidebar;
