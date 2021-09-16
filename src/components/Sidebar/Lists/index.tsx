import { FC, useState, useRef, MouseEventHandler } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import styles from './Lists.module.css';
import { openList, openMenu, closeMenu } from './../../../redux/actions/List';
import ListDropdown from '../ListDropdown';
import Icon from './../../../shared/Icon';

const Lists: FC = () => {
  const [areListsOpen, setAreListsOpen] = useState<boolean>(false);
  const titleRef = useRef(null);
  const dispatch = useDispatch();

  const { lists } = useSelector((state: RootStateOrAny) => state);

  const toggleListsDropdown = () => setAreListsOpen(prev => !prev);

  const openListOptionsHandler = (e: any, id: number) => {
    e.stopPropagation();
    dispatch(openMenu(id));
  };

  return (
    <div className={styles['Lists']}>
      <header className={styles['Header']} onClick={toggleListsDropdown}>
        <h3>
          your lists
          <Icon
            iconName='arrowRight'
            className={areListsOpen ? styles['RotateArrow'] : ''}
          />
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
            isMenuOpen: boolean;
            title: string;
            tasks: Array<{ id: number; title: string }>;
          }) => (
            <li className={styles['List']}>
              <div
                ref={titleRef}
                className={styles['Title']}
                onClick={() => dispatch(openList(item['id']))}>
                <span className='flex items-center gap-2'>
                  <Icon
                    iconName='arrowRight'
                    className={item['isOpen'] ? styles['RotateArrow'] : ''}
                  />
                  <span>{item['title']}</span>
                </span>
                <button
                  onClick={e => openListOptionsHandler(e, item['id'])}
                  className={styles['OpenOptionsButton']}>
                  <Icon iconName='threeDots' />
                </button>
                {item['isMenuOpen'] && (
                  <ListDropdown
                    newTaskRef={titleRef}
                    isOpen
                    onClose={() => dispatch(closeMenu(item['id']))}
                  />
                )}
              </div>
              <ul
                className={`${styles['Tasks']} ${
                  item['isOpen'] ? styles['OpenTasks'] : ''
                }`}>
                {item['tasks'].map((task: { id: number; title: string }) => (
                  <li className={styles['Task']} key={task['id']}>
                    <Icon iconName='solidCircle' />
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
