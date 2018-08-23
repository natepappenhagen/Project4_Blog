import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

class EditCommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // onClickToggleModal(){
  //   this.toggle;
  //   this.props.showCommentModal(this.props.commentID)
  // }
  // onClick={this.onClickToggleModal}>

  render() {
    console.log(JSON.stringify(this.props.commentToEdit) + "LOOK AT THESE FUCKING PROPS YO")

    return (
      <span>
        <button className="btn btn-warning btn-sm edit-comment-btn" onClick={this.toggle}> Edit Comment</button>

        {/*                <Button 
              color="danger"
              onClick={ async (e) => 
                      {
                        e.preventDefault()
                        // console.log(this.props)
                            await this.toggle
                            await this.props.showCommentModal(this.props.commentID)
                      }} >EDIT COMMENT </Button>*/}

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Comment</ModalHeader>
          <ModalBody>

            <form onSubmit={async (e) => {
              e.preventDefault()
              console.log(this.props)
              this.toggle();
              // await   this.props.showCommentModal(this.props.commentID)
              await this.props.closeAndEditComment(this.props.commentID, this.props.commentToEdit.post)
            }} >
              <FormGroup>
                <label>
                  Edit Date:
                    <input type="text"
                    name="date"
                    onChange={this.props.handleCommentFormChange}
                    placeholder={this.props.commentToEdit.date} />
                </label>
              </FormGroup>
              <FormGroup>
                <label>
                  Edit Comment:
                  <textarea className="form-control comment-textarea" rows="6" cols="60" type="textarea"
                    name="body"
                    onChange={this.props.handleCommentFormChange}
                    placeholder={this.props.commentToEdit.body} />
                </label>
              </FormGroup>
              <input type="hidden" name="post" value={this.props.post} onChange={this.updateComment} />
              <button className="btn btn-primary btn-sm edit-comment-btn" type="submit" value="Edit Comment">Submit</button>
            </form>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}



export default EditCommentModal;




