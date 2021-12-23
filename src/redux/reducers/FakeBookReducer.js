import { ADD_COMMENT } from '../types/FakeBookType';

// rxreducx snippet
const initialState = {
  comments: [
    {
      name: 'Yone',
      content: 'Hi ! yasuo !',
      avatar: `https://i.pravatar.cc/150?u=yone`,
    },
    {
      name: 'Yasuo',
      content: 'Hi ! brother !',
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

const FakeBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT: {
      console.log('add comment in redux store');
      return { ...state, ...payload };
    }

    default:
      console.log('default case in redux store');
      return state;
  }
};

export default FakeBookReducer;
