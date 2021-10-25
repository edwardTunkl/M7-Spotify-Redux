import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cleanUp } from "../redux/action/search";
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  cleanUpData: (value) => {
    dispatch(cleanUp(value));
  },
});

const AlbumCard = ({ song, cleanUpData }) => (
  <div className="col text-center" id={song.id}>
    <Link to={"/album/" + song.album.id} onClick={() => cleanUpData()}>
      <div>
        <img className="img-fluid" src={song.album.cover_medium} alt="1" />
      </div>
    </Link>
    <p>
      <Link to={"/album/" + song.album.id} onClick={() => cleanUpData()}>
        <span>Album:&nbsp;</span>
        <span>
          "
          {song.album.title.length < 16
            ? song.album.title
            : song.album.title.substring(0, 16) + "..."}
          "
        </span>
        <br />
      </Link>
      <Link to={"/artist/" + song.artist.id} onClick={() => cleanUpData()}>
        <span>Artist:&nbsp;</span>
        <span>{song.artist.name}</span>
      </Link>
    </p>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard);
