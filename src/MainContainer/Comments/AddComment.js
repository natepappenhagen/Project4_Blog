import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CreateComment extends Component {
    constructor() {
        super();

        this.state = {
            date: '',
            body: '',
            post: '',
        }
    }

    updateComment = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    render() {
        // console.log(this.props, ' this is props at createcomment');
        return (
            <div>
                <br></br>
                <hr className="my-2" />
                <br></br>

                <h4 className="comment-h3">Leave a Comment</h4>

                <div className="center-comments-form">
                <form onSubmit={this.props.addComment.bind(this, this.state)}>
                    <FormGroup>
                    
                        <label className="comment-date-label" >Date:
                        <br></br>
                        <input className="comment-date" type="text" name="date" onChange={this.updateComment} />
                        </label>
                        <div className="center-textarea">
                        <label className="comment-body-label" >Comment:
                        <textarea className="form-control comment-textarea" rows="6" cols="48" type="textarea" name="body" onChange={this.updateComment} />
                        </label>
                      </div>  
                    </FormGroup>
                    <FormGroup>
                        <label className="checkbox-robot">Check box if not a Robot!
                        <input className="checkbox" type="checkbox" name="post" value={this.props.postID} onChange={this.updateComment} />
                        </label>
                    </FormGroup>    
                    <FormGroup>
                        <span className="center-new-comment-btns">
                        <button className="btn btn-primary btn-sm submit-btn" type="submit" value="Comment">Submit</button>
                        <button className="btn btn-primary btn-sm reset-btn" type="reset">Reset Form</button>
                        </span>
                    </FormGroup>
                
                </form>
                </div>
                <br></br>
                

            </div>
        )
    }
}

export default CreateComment;