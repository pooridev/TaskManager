import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../shared/Icon';
import styles from './Action.module.css';

const Actions: FC = () => {
  return (
    <ul className={styles['Actions']}>
      <li className={styles['Action']}>
        <Link to='/search'>
          <Icon iconName='search' />
          Search
        </Link>
      </li>
      <li className={styles['Action']}>
        <Link to='/recent'>
          <Icon iconName='recent' />
          Recent
        </Link>
      </li>
    </ul>
  );
};

export default Actions;
