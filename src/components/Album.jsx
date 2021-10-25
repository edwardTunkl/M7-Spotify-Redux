import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  AddLikesAction,
  AddPlaylistoneAction,
  AddPlaylisttwoAction,
} from "../redux/action/user.js";
import { addPlaylistAction, addAlbumAction } from "../redux/action/player";
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTrackToPlaylist: (song) => {
    dispatch(addPlaylistAction(song));
  },
  addAlbumToPlaylist: (album) => {
    dispatch(addAlbumAction(album));
  },
  AddLikes: (Album) => {
    dispatch(AddLikesAction(Album));
  },
  AddPlaylistone: (Album) => {
    dispatch(AddPlaylistoneAction(Album));
  },
  AddPlaylisttwo: (Album) => {
    dispatch(AddPlaylisttwoAction(Album));
  },
});

class Album extends React.Component {
  state = {
    album: {},
    songs: [],
  };
  componentDidMount = async () => {
    let albumId = this.props.match.params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        this.setState({
          album,
          songs: album.tracks.data,
        });
        console.log("SONGS", this.state.songs);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  render() {
    return (
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        <Row>
          {this.state.album.cover && (
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={this.state.album.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{this.state.album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {this.state.album.artist ? this.state.album.artist.name : ""}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button
                  id="btnPlay"
                  className="btn btn-success"
                  type="button"
                  onClick={() => {
                    this.props.addTrackToPlaylist(this.state.songs[0]);
                    this.props.addAlbumToPlaylist(this.state.album);
                  }}
                >
                  Play
                </button>
              </div>

              {/* Sai Additions */}
              <div className="mt-4 text-center">
                <button
                  id="btnPlay"
                  className="btn btn-warning"
                  type="button"
                  onClick={(e) => this.props.AddLikes(this.state.album)}
                >
                  Like
                </button>
              </div>
              <div className="mt-4 text-center">
                <button
                  id="btnPlay"
                  className="btn btn-primary"
                  type="button"
                  onClick={(e) => this.props.AddPlaylistone(this.state.album)}
                >
                  Add to PlayList one
                </button>
              </div>
              <div className="mt-4 text-center">
                <button
                  id="btnPlay"
                  className="btn btn-info"
                  type="button"
                  onClick={(e) => this.props.AddPlaylisttwo(this.state.album)}
                >
                  Add to PlayList Two
                </button>
              </div>
              {/* Ends here */}
            </div>
          )}
          {/* songs row */}
          <div className="col-md-8 p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {this.state.songs.map((song) => (
                  <Song track={song} key={song.id} album={this.state.album} />
                ))}
              </div>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
