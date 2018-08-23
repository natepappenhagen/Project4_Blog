import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

class EditPostModal extends React.Component {
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



  render() {
    console.log(this.props)
    return (
      <span>
        <button className="btn btn-warning btn-sm edit-post-btn" onClick={this.toggle}> Edit Post </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Blog Post</ModalHeader>
          <ModalBody>
            <form onSubmit={async (e) => {
              e.preventDefault()
              this.toggle();
              await this.props.closeAndEdit(this.props.postToEdit.id)
            }} >
              <FormGroup>
                <label>
                  Edit Date:
             		<input type="text"
                    name="date"
                    onChange={this.props.handleFormChange}
                    placeholder={this.props.postToEdit.date} />
                </label>
              </FormGroup>
              <FormGroup>
                <label>
                  Edit Title:
             		<input type="text"
                    name="title"
                    onChange={this.props.handleFormChange}
                    placeholder={this.props.postToEdit.title} />
                </label>
              </FormGroup>
              <FormGroup>
                <label>
                  Edit Body:
                <textarea className="form-control post-edit-textarea" rows="6" cols="75" type="textarea"
                    name="body"
                    onChange={this.props.handleFormChange}
                    placeholder={this.props.postToEdit.body} />
                </label>
              </FormGroup>
              <FormGroup>
                <label>
                  Edit Image:
                <input type="text"
                    name="img_url"
                    onChange={this.props.handleFormChange}
                    placeholder={this.props.postToEdit.img_url} />
                </label>
              </FormGroup>
              <button className="btn btn-primary btn-sm submit-edit-post-btn" type='Submit'>Submit</button>
            </form>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

export default EditPostModal;