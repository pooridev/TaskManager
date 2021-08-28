import { FC, ReactChild } from 'react';
import Sidebar from '../../components/Sidebar/index';
import styles from './MainLayout.module.css';

interface Props {
  children: ReactChild;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles['MainLayout']}>
      <Sidebar />
      <main className={styles['mainContent']}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
