import { Row } from "react-bootstrap";
import { connect } from "react-redux"
import { ListGroup, Badge } from "react-bootstrap";
import {playlist_one_remove_Action} from "../redux/action/user.js"
import {ImBin2} from "react-icons/im"

const read = state => ({
  Playlistone: state.user.playlist1
})

const write = (dispatch) => ({
  removefromplaylistone: (obj) => {
      dispatch(playlist_one_remove_Action(obj))
  }
})

const Playlist1 = ({Playlistone, removefromplaylistone}) => {
    return Playlistone.length>0 ? (<>
         {console.log(Playlistone)}
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
          {Playlistone.map((L,i) => <Row key={i}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <img src={L.cover} alt="some" style={{height: '100px', width: '100px'}} />
          </ListGroup.Item>
          <ListGroup.Item>{L.title}</ListGroup.Item>
          <ListGroup.Item>{L.nb_tracks}</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
          <ListGroup.Item onClick={e =>  removefromplaylistone(L)}> <ImBin2 style={{color:"red"}}/></ListGroup.Item>
        </ListGroup>
        </Row>
      )}
        
        </div>
        </>
    ): (
      <Row className='mt-5'>
      <h3  bg="warning" text="dark" style={{color: "thistle"}}>
      No Items in Playlist_one.....Add your Favourite songs
    </h3>
    </Row>
    )
}

export default connect(read, write)(Playlist1);