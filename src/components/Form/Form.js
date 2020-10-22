import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addComment, deleteComment, editComment } from './../../actions/appActions';


const Form = ({
  addComment,
  author = '',
  callback,
  comment = '',
  deleteComment,
  editComment,
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [commentInput, setCommentInput] = useState(comment);
  const [rateInput, setRateInput] = useState(rate);

  const handleChangeAuthor = e => setAuthorInput(e.target.value);
  const handleChangeComment = e => setCommentInput(e.target.value);
  const handleChangeRate = e => setRateInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const commentObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    id ? editComment(commentObject) : addComment(commentObject)

    id && callback();
  }

  const handleClickDelete = () => {
    deleteComment(id)
  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            Author:
          </div>
          <input
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
            disabled={id ? true : false}
          />
        </label>

        <label>
          <div>
            Rate:
          </div>
          <input
            onChange={handleChangeRate}
            type="number"
            value={rateInput}
          />
        </label>

        <label>
          <div>
            Comment:
          </div>
          <input
            onChange={handleChangeComment}
            type="text"
            value={commentInput}
          />
        </label>

        <button
          type="submit"
        >
          {id ? 'Save' : 'Add'}
        </button>
        {id && <button onClick={handleClickDelete}>Delete</button>}
      </form>
    </div>
  )
}

const connectActionsToProps = ({
  addComment,
  deleteComment,
  editComment
})

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;