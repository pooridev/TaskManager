import { types } from './../types';
import { AnyAction } from 'redux';

interface ListState {
  lists: {
    title: string;
    id: number;
    isOpen: boolean;
    isMenuOpen: boolean;
    tasks: {
      title: string;
      id: number;
      isDone: boolean;
      description: string;
    }[];
  }[];
}

const initialState: ListState = {
  lists: [
    {
      title: 'Calistu',
      id: 1,
      isOpen: false,
      isMenuOpen: false,
      tasks: [
        { title: 'Fixing', id: 1, isDone: false, description: 'Fix api bugs' },
        { title: '474', id: 1, isDone: false, description: 'Fix api bugs' },
        { title: 'dfdf', id: 1, isDone: false, description: 'Fix api bugs' }
      ]
    },
    {
      title: 'Junior-Coders',
      id: 2,
      isOpen: false,
      isMenuOpen: false,
      tasks: [
        {
          title: 'Designing',
          id: 1,
          isDone: false,
          description: 'Fix api bugs'
        }
      ]
    }
  ]
};

export default (
  state = initialState,
  { type, payload }: AnyAction
): ListState => {
  switch (type) {
    case types.OPEN_LIST: {
      const newList = state.lists.map(item => {
        if (item.id === payload) {
          item.isOpen = !item.isOpen;
          return item;
        }
      });
      return { ...state, ...newList };
    }
    case types.DELETE_LIST: {
      const newList = state.lists.map(list => list.id !== payload.id);
      return {
        ...state,
        ...newList
      };
    }
    case types.OPEN_MENU: {
      const newList = state.lists.map(item => {
        if (item.id === payload) {
          item.isMenuOpen = !item.isMenuOpen;
          return item;
        }
      });
      return { ...state, ...newList };
    }
    case types.CLOSE_MENU: {
      const newList = state.lists.map(item => {
        if (item.id === payload) {
          item.isMenuOpen = !item.isMenuOpen;
          return item;
        }
      });
      return { ...state, ...newList };
    }
    default:
      return state;
  }
};
