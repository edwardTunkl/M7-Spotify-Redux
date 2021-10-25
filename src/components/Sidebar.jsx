import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { SearchIt, setQuery } from "../redux/action/search";
import { AiFillLike } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs"
import "../player.css";


const mapStateToProps = (state) => ({
  search: state.search,
  likeslength: state.user.liked.length,
  playlistonelength: state.user.playlist1.length,
  playlisttwolength: state.user.playlist2.length,
});
const mapDispatchToProps = (dispatch) => ({
  searchData: (value) => {
    dispatch(SearchIt(value));
  },
  setSearchQuery: (query) => {
    dispatch(setQuery(query));
  },
});

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-2">
        <nav
          className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="nav-container">
            <Link to="/" className="navbar-brand">
              <img
                src="/logo/Spotify_Logo.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
                onClick={() => this.props.setSearchQuery("")}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="nav-item nav-link"
                      onClick={() => this.props.setSearchQuery("")}
                    >
                      <i className="fas fa-home fa-lg"></i>&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="nav-item nav-link"
                      onClick={() => this.props.setSearchQuery("")}
                    >
                      <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="nav-item nav-link"
                      onClick={() => this.props.setSearchQuery("")}
                    >
                      <BsFillHeartFill className="ml-1 mr-1"/>&nbsp; 
                      Liked Songs
                    </Link>
                  </li>

                  {this.props.location.pathname === "/" && (
                    <li>
                      <div className="input-group mt-3">
                        <input
                          value={this.props.search.query}
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="...search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          onChange={(e) =>
                            this.props.setSearchQuery(e.target.value)
                          }
                          onKeyUp={(e) =>
                            e.key === "Enter" && this.props.searchData()
                          }
                        />
                        <div
                          className="input-group-append"
                          style={{ marginBottom: "4%" }}
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick={() => this.props.searchData()}
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  )}
                  {/* Sai Additions below */}

                  <li className="nav-item nav-link">
                    <Link to="/likes" className="nav-item nav-link">
                      <i style={{ color: "whitesmoke" }}>
                        <AiFillLike
                          style={{ color: "yellow" }}
                          className="mr-3"
                        />
                        Likes{" "}
                        <span className="ml-2">{this.props.likeslength}</span>
                      </i>
                    </Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/playlistone" className="nav-item nav-link">
                      <p style={{ color: "whitesmoke" }}>
                        <RiPlayList2Fill
                          style={{ color: "blue" }}
                          className="mr-3"
                        />
                        Playlist1{" "}
                        <span className="ml-2">
                          {this.props.playlistonelength}
                        </span>
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/playlisttwo" className="nav-item nav-link">
                      <p style={{ color: "whitesmoke" }}>
                        <RiPlayList2Fill
                          style={{ color: "skyblue" }}
                          className="mr-3"
                        />
                        Playlist2{" "}
                        <span className="ml-2">
                          {this.props.playlisttwolength}
                        </span>
                      </p>
                    </Link>
                  </li>

                  {/* ends here */}
          
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-btn">
            <button className="btn" id="signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn" id="login-btn" type="button">
              Login
            </button>
            <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
