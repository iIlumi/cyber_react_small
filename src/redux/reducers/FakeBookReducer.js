import { ADD_COMMENT } from '../types/FakeBookType';

// rxreducx snippet

// random image avatar -> KEYWORD
// https://pravatar.cc/
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

      // state.comments = [...state.comments,action.userComment];
      // return { ...state };
      // theo cách viết hiện tại và trong action creator: action.userComment = payload
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    }

    default:
      console.log('default case in redux store');
      return state;
  }
};

export default FakeBookReducer;
