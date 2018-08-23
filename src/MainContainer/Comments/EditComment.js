import React from 'react';

const EditComment = (props) => {

    return (
        <div>
            <h4>Edit Comment</h4>
            <form onSubmit={props.closeAndEditComment}>
                <label>
                    Edit Date:
                    <input type="text" name="date" onChange={props.handleCommentFormChange} value={props.commentToEdit.date} />
                </label>
                <label>
                    Edit Comment:
                    <input type="text" name="body" onChange={props.handleCommentFormChange} value={props.commentToEdit.body} />
                </label>
                <input type="submit" value="Edit Comment" />
            </form>
        </div>
    )
}

export default EditComment;