import { Row } from "react-bootstrap";
import { connect } from "react-redux"
import { ListGroup, Badge } from "react-bootstrap";
import {Likes_remove_Action} from "../redux/action/user.js"
import {ImBin2} from "react-icons/im"

const read = state => ({
  Likes: state.user.liked
})

const write = (dispatch) => ({
  removefromLikes: (obj) => {
      dispatch(Likes_remove_Action(obj))
  }
})

const Likes = ({Likes, removefromLikes}) => {
 
  return Likes.length>0 ? (<>
    
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
      {Likes.map((L,i) => <Row key={i}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <img src={L.cover} alt="some" style={{height: '100px', width: '100px'}} />
          </ListGroup.Item>
          <ListGroup.Item>{L.title}</ListGroup.Item>
          <ListGroup.Item>{L.nb_tracks}</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
          <ListGroup.Item onClick={e => removefromLikes(L)}> <ImBin2 style={{color:"red"}}/></ListGroup.Item>
        </ListGroup>
      </Row>
      )}
      </div>
    </>
  ): (
    <Row className='mt-5'>
    <h3  bg="warning" text="dark" style={{color: "yellow"}}>
    No Likes Added Yet!! ....click on Album to do so
  </h3>
  </Row>
  )
}

export default connect(read, write)(Likes);