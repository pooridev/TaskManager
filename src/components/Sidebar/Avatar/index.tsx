import { FC } from 'react';
import userAvatar from '../../../assets/images/avatar.jpg';
import styles from './Avatar.module.css';

const Avatar: FC = () => {
  return (
    <div className={styles['Avatar']}>
      <img className={styles['UserAvatar']} src={userAvatar} alt='pooria faramarzian' />
      <p>Pooria</p>
    </div>
  );
};

export default Avatar;
