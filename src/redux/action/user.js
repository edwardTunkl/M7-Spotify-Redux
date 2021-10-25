// export const someAction = (value) => {
//   return async (dispatch, getState) => {
//     dispatch({
//       type: "NAME",
//       payload: value,
//     });
//   };
// };
const LIKES = 'LIKES'
const PLAYLIST_ONE = 'PLAYLIST_ONE'
const PLAYLIST_TWO = 'PLAYLIST_TWO'

const REMOVE_LIKES = 'REMOVE_LIKES'
const REMOVE_FROM_PLAYLIST_ONE = 'REMOVE_FROM_PLAYLIST_ONE'
const REMOVE_FROM_PLAYLIST_TWO = 'REMOVE_FROM_PLAYLIST_TWO'

////Adding
export const AddLikesAction = (data) => ({
    type: LIKES,
    payload: data
})

export const AddPlaylistoneAction = (data) => ({
  type: PLAYLIST_ONE,
  payload: data
})

export const AddPlaylisttwoAction = (data) => ({
  type: PLAYLIST_TWO,
  payload: data
})

////Removing
export const Likes_remove_Action = (obj) => ({
    type: REMOVE_LIKES,
    payload: obj
})

export const playlist_one_remove_Action = (obj) => ({
  type: REMOVE_FROM_PLAYLIST_ONE,
  payload: obj
})

export const playlist_two_remove_Action = (obj) => ({
  type: REMOVE_FROM_PLAYLIST_TWO,
  payload: obj
})