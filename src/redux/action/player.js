export const ADD_TRACK_PLAYLIST = "ADD_TRACK_PLAYLIST" 
export const ADD_ALBUM_PLAYLIST = "ADD_ALBUM_PLAYLIST" 


export const addPlaylistAction = (track) => ({
  type: ADD_TRACK_PLAYLIST,
  payload: track,
});
export const addAlbumAction = (album) => ({
  type: ADD_ALBUM_PLAYLIST,
  payload: album,
});
