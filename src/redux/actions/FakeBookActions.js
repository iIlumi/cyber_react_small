import { ADD_COMMENT } from '../types/FakeBookType';

// có thể tách riên payload ra tên para input khác để nhắc
export const addCommentAction = (userComment) => ({
  type: ADD_COMMENT,
  payload: userComment,
});

// rxaction snippet, 
// export const actionName = (payload) => ({
//   type: type,
//   payload
// })
