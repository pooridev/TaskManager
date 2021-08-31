import { types } from './../types';
import { AnyAction } from 'redux';

interface ListState {
  lists: {
    title: string;
    id: number;
    isOpen: boolean;
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
    default:
      return state;
  }
};
