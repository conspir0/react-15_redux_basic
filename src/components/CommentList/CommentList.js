import React from 'react';
import Comment from './../Comment/Comment';


const CommentList = ({ comments }) => {
  const commentList = comments.map((comment, index) => (
    <Comment
      key={index}
      {...comment}
    />
  ))

  return (
    <div className="container-list">
      {commentList}
    </div>
  )
};

export default CommentList;