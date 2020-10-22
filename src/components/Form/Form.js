import React from 'react';
import { useState } from 'react';


const Form = ({
  author = '',
  callback,
  comment = '',
  id,
  rate = '',
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

    console.log(commentObject)
    id ? console.log('akcja edycji') : console.log('akcja dodania')

    if (id) {
      callback();
    }
  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        {id ? null :
          <label>
            <div>
              Author:
          </div>
            <input
              onChange={handleChangeAuthor}
              type="text"
              value={authorInput}
            />
          </label>
        }

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
          {id ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default Form;