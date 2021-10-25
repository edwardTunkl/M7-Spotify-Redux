import React from "react";
import { connect } from 'react-redux'
import { addPlaylistAction, addAlbumAction } from "../redux/action/player";

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({
  addTrackToPlaylist: (song) => {
    dispatch(addPlaylistAction(song))
  },
  addAlbumToPlaylist: (album) => {
    dispatch(addAlbumAction(album))
  }
})

const Song = ({ track, album ,addTrackToPlaylist, addAlbumToPlaylist }) => (

  <div className="py-3 trackHover"
      onClick={() =>{
        addTrackToPlaylist(track)
        addAlbumToPlaylist(album)
        console.log("SONG ADDED", track)
        console.log("KLICK")
        console.log("THIS IS ALBUM", album)
      }}>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
