import React, { Component } from 'react';
import Posts from './Posts';
import Aux from '../hoc/Aux';
import Navigation from '../Nav/Nav.jsx'
import CreatePost from './CreatePost';
// import EditPost from './EditPost';
import { Route, Switch, Link } from 'react-router-dom';

import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css';
import Carousel from '../Carousel/Carousel';
import EditComment from './Comments/EditComment';

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      comments: [],
      showEdit: false,
      editPostId: null,
      postToEdit: {
        date: '',
        title: '',
        body: '',
        img_url: '',
      },
      showCommentEdit: false,
      editCommentId: null,
      commentToEdit: {
        date: '',
        body: '',
      },
    }
  }

  componentDidMount() {
    this.getPosts().then((posts) => {
      this.setState({ posts: posts })
    }).catch((err) => {
      // console.log(err);
    });
    this.getComments().then((comments) => {
      this.setState({ comments: comments })
    }).catch((err) => {
      // console.log(err);
    })
  }

  // ========================= Posts API Calls =========================
  getPosts = async () => {

    const posts = await fetch('http://localhost:8000/api/posts/');
    const postsJson = await posts.json();
    return postsJson

  }
  addPost = async (post, e) => {
    e.preventDefault();
    console.log('this is post')
    try {
      const createdPost = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const createdPostJson = await createdPost.json();

      console.log(createdPostJson);
      this.setState({posts: [...this.state.posts, createdPostJson]});
    } catch(err) {
      console.log(err)

    }
  }
  
  deletePost = async (id, e) => {
    // console.log(id, ' this is id of the post in the delete route');
    e.preventDefault();
    try {
      const deletePost = await fetch('http://localhost:8000/api/posts/' + id + '/', {
        method: 'DELETE',
      });

      console.log(deletePost, 'inside try');
      this.setState({ posts: this.state.posts.filter((post, i) => post.id !== id) });
    } catch (err) {
      console.log(err, ' error')
      }

    }


  showModal = (id, e) => {
    // i comes before e, when called with bind
    const postToEdit = this.state.posts.find((post) => post.id === id)
    // console.log(postToEdit, ' postToEdit')
    this.setState({
      showEdit: true,
      editPostId: id,
      postToEdit: postToEdit
    });
  }
  closeAndEdit = async (postId) => {
    console.log(this.state.postToEdit, ' this is this.state.postToEdit on closeAndEdit function');
    console.log(postId)

    try {
      const editResponse = await fetch('http://localhost:8000/api/posts/' + postId + '/', {
        method: 'PUT',
        body: JSON.stringify(this.state.postToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseJson = await editResponse.json();

      const editedPostArray = this.state.posts.map((post) => {

        if (post.id === parseInt(postId)) {

          console.log("FOUND THE ONE TO REPLACE")
          return editResponseJson
        }

        return post
      });

      this.setState({
        posts: editedPostArray,
        showEdit: false
      });



    } catch (err) {
      // console.log(err);
    }

  }
  handleFormChange = (e) => {

    this.setState({
      postToEdit: { ...this.state.postToEdit, [e.target.name]: e.target.value }
    })
  }

  // ========================= Comments API Calls =========================

  getComments = async () => {
    const comments = await fetch('http://localhost:8000/api/comments/');
    const commentsJson = await comments.json();
    // console.log(commentsJson, ' this is commentsJson');
    // console.log(comments, ' this is comments');
    return commentsJson;
  }

  addComment = async (comment, e) => {
    console.log(comment, ' this is comment');
    e.preventDefault();

    try {
      const createdComment = await fetch('http://localhost:8000/api/comments/', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const createdCommentJson = await createdComment.json();
      this.setState({ comments: [...this.state.comments, createdCommentJson] });
    } catch (err) {
      // console.log(err);
    }
  }

  deleteComment = async (id, e) => {
    e.preventDefault();
    // console.log('deleteComment function is being called, this is the id: ', id);
    try {
      const deleteComment = await fetch('http://localhost:8000/api/comments/' + id + '/', {
        method: 'DELETE'
      });
      // console.log(deleteComment, ' this is delete comment');

      if (deleteComment.status === 204) {
        this.setState({ comments: this.state.comments.filter((comment, i) => comment.id !== id) });
      } else {
        // console.log('error in delete comment');
      }
    } catch (err) {
      // console.log(err, ' this is error caught when deleted comment');
    }
  }

  showCommentModal = (id) => {
    // console.log('showCommentModal function is being called, this is the id: ', id);
    const commentToEdit = this.state.comments.find((comment) => comment.id === id);
    console.log(commentToEdit, ' this is commentToEdit XxXxXxXxXxXxXx +++++++++++========||||||');
    // console.log(id, ' this is id');
    this.setState({
      showCommentEdit: true,
      editCommentId: id,
      commentToEdit: commentToEdit,
    });
  }

  closeAndEditComment = async (commentId, post) => {
    console.log(this.state.commentToEdit + "THIS IS THE COMMENT TO EDIT ++++++++++")
    console.log(commentId);
    const data = {
      ...this.state.commentToEdit,
      post: post,
      id: commentId
    }
    console.log(data)
    // e.preventDefault();
    try {
      const editComment = await fetch('http://localhost:8000/api/comments/' + commentId + '/', {
        method: 'PUT',
        body: JSON.stringify({
          ...this.state.commentToEdit,
          "post":post
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editCommentJson = await editComment.json();
      const editedCommentArray = this.state.comments.map((comment) => {
        console.log(comment)
        if (comment.id === parseInt(commentId)) {
          console.log("FOUND THE ONE TO REPLACE")
          return editCommentJson;
        }
        return comment;
      });
      // console.log(editCommentJson, ' this is editCommentJson');
      console.log("SHOULDA REPLACED ID WITH " + commentId)
      console.log(editedCommentArray, ' this is editedCommentArray');
      this.setState({
        comments: editedCommentArray,
        showCommentEdit: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleCommentFormChange = (e) => {
    this.setState({
      commentToEdit: { ...this.state.commentToEdit, [e.target.name]: e.target.value }
    })
  }

  // ========================= Return/Display =========================

  render() {
    // console.log(this.state)
    return (
      <Aux>

        <Navigation />
       
        <img className="home-image" src="https://i.imgur.com/N63zgcn.png" alt=""/>

        <Switch>
          <Route exact path="/" render={(props) => (

          <Posts posts={this.state.posts}
                   deletePost={this.deletePost}
                   showModal={this.showModal}
                   ////////////passing props for edit POST ///////////
                   showEdit={this.state.showEdit}
                   comments={this.state.comments}
                   addComment={this.addComment} 
                   deleteComment={this.deleteComment} 
                   closeAndEdit={this.closeAndEdit} 
                   handleFormChange={this.handleFormChange} 
                   postToEdit={this.state.postToEdit}
                   ///////////passing props for  edit COMMENT ////////
                   showCommentEdit={this.state.showCommentEdit}
                   closeAndEditComment={this.closeAndEditComment}
                   handleCommentFormChange={this.handleCommentFormChange} 
                   commentToEdit={this.state.commentToEdit}
                   showCommentModal={this.showCommentModal}
            />

          )} />





          <Route exact path="/new" render={(props) => (
            <CreatePost {...props} addPost={this.addPost} />
          )} />

        </Switch>


      </Aux>
    );
  }
}


export default MainContainer;
