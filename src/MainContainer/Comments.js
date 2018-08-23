import React from 'react';

import EditCommentModal from '../EditCommentModal';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
} from 'reactstrap';

const Comments = (props) => {
    let apiPostID = 'http://localhost:8000/api/posts/' + props.postID + '/';

    const commentList = props.comments.map((comment, i) => {
        // console.log(comment, ' this is comment');
        console.log(props + 'LOOK AT THIS NOW PLZ')

        if (apiPostID === comment.post) {
            return (
                <div key={comment.id}>
                    <ListGroup>
                        <ListGroupItem>
                            <span>{comment.date}</span>
                            <br></br>
                            <span>{comment.body}</span>
                            <br></br>
                            
                        
                    
                    <div className="comment-edit-delete-btns">
                    <br></br>
                    <EditCommentModal
                        {...props}
                        commentID={comment.id}
                        showCommentModal={props.showCommentModal}
                        closeAndEditComment={props.closeAndEditComment}
                        commentToEdit={comment}
                        handleCommentFormChange={props.handleCommentFormChange}
                    />
                    <button className="btn btn-danger btn-sm" onClick={props.deleteComment.bind(null, comment.id)}>Delete Comment</button>
                            {/*<button onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>*/}
                    </div>
                    </ListGroupItem>
                </ListGroup>
                
                </div>
            )
        }
    })

    return (
        <div>
            {commentList}
        </div>
    )
};

export default Comments;