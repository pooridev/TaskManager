import { FC, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import styles from './Lists.module.css';
import { openList } from './../../../redux/actions/List';

const Lists: FC = () => {
  const [areListsOpen, setAreListsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { lists } = useSelector((state: RootStateOrAny) => state);

  const toggleListsDropdown = () => setAreListsOpen(prev => !prev);

  return (
    <div className={styles['Lists']}>
      <header className={styles['Header']} onClick={toggleListsDropdown}>
        <h3>
          your lists
          <svg
            className={areListsOpen ? styles['RotateArrow'] : ''}
            width='6'
            height='7'
            viewBox='0 0 6 7'
            fill='#8A8F98'>
            <path d='M5.25 3.20126C5.58333 3.39371 5.58333 3.87484 5.25 4.06729L0.749999 6.66537C0.416666 6.85782 -2.38418e-07 6.61725 -2.38418e-07 6.23235L-2.38418e-07 1.0362C-2.38418e-07 0.651301 0.416666 0.410738 0.75 0.603188L5.25 3.20126Z'></path>
          </svg>
        </h3>
      </header>
      <ul
        className={`${styles['TaskLists']}${
          areListsOpen ? styles['Open'] : ''
        }`}>
        {lists.map(
          (item: {
            id: number;
            isOpen: boolean;
            title: string;
            tasks: { id: number; title: string }[];
          }) => (
            <li className={styles['List']}>
              <div
                className={styles['Title']}
                onClick={() => dispatch(openList(item['id']))}>
                <svg
                  className={item['isOpen'] ? styles['RotateArrow'] : ''}
                  width='6'
                  height='7'
                  viewBox='0 0 6 7'
                  fill='#8A8F98'>
                  <path d='M5.25 3.20126C5.58333 3.39371 5.58333 3.87484 5.25 4.06729L0.749999 6.66537C0.416666 6.85782 -2.38418e-07 6.61725 -2.38418e-07 6.23235L-2.38418e-07 1.0362C-2.38418e-07 0.651301 0.416666 0.410738 0.75 0.603188L5.25 3.20126Z'></path>
                </svg>
                <span>{item['title']}</span>
              </div>
              <ul
                className={`${styles['Tasks']} ${
                  item['isOpen'] ? styles['OpenTasks'] : ''
                }`}>
                {item['tasks'].map((task: { id: number; title: string }) => (
                  <li className={styles['Task']} key={task['id']}>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='#8A8F98'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'></path>
                    </svg>
                    {task['title']}
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Lists;
