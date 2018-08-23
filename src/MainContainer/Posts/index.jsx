import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import CreateComment from '../Comments/AddComment';

import Comments from '../Comments.js';
import EditPostModal from '../EditPostModal';
import EditCommentModal from '../../EditCommentModal'





const Posts = (props) => {

  const postList = props.posts.map((post, i) => {
    // console.log(post, ' post id')

    console.log(props.comments[0], ' this is props comments in Posts');
    return (



      <Col className="column-posts" sm="6">
        <Card className="card-deck" key={post.id}>

          <CardImg top width="auto" src={post.img_url} alt="" />
          <CardBody>
            <CardTitle>
              <h3 className="blog-title"><a href="../PostShowPage/PostShowPage.jsx"></a>{post.title}</h3>
            </CardTitle>
            <CardSubtitle>
              <div key={post.id}>
                <h6>{post.date}</h6>
              </div>
            </CardSubtitle>
            <CardText className="blog-body">
              {post.body}
            </CardText>
            <span className="center-post-btns">
            <EditPostModal
              closeAndEdit={props.closeAndEdit}
              handleFormChange={props.handleFormChange}
              postToEdit={post}
              showModal={props.showModal}
            />
            
              <button className="btn btn-danger btn-sm delete-btn" onClick={props.deletePost.bind(null, post.id)}>Delete Post</button>
            </span>
          </CardBody>
          <CreateComment postID={'http://localhost:8000/api/posts/' + post.id + '/'} addComment={props.addComment} />

          <Comments
            postID={post.id}
            comments={props.comments}
            deleteComment={props.deleteComment}

            showCommentModal={props.showCommentModal}
            closeAndEditComment={props.closeAndEditComment}
            commentToEdit={props.commentToEdit}
            handleCommentFormChange={props.handleCommentFormChange}
          />
        </Card>
      </Col>
    )
  })

  return (
    <Container className="container">
      <Row>
        <CardDeck className="card-deck">
          {postList}
        </CardDeck>
      </Row>
    </Container>
  )

};


export default Posts;

