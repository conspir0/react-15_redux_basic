import React from 'react';
import { useState } from 'react';
import Form from './../Form/Form';


const Comment = ({ author, comment, id, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm(prev => !prev);

  const formOrButtonElem = isVisibleForm
    ? (
      <Form
        author={author}
        callback={toggleElements}
        comment={comment}
        id={id}
        rate={rate}
      />
    ) : (
      <button onClick={toggleElements}>
        Edit
      </button>
    )

  return (
    <div className="comment">
      <h3 className="comment-author">
        {author}
      </h3>
      <div className="comment-rate">
        {rate}
      </div>
      <div className="comment-text">
        {comment}
      </div>
      {formOrButtonElem}
    </div>
  )
};

export default Comment;