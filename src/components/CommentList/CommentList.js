import React from 'react';
import { connect } from 'react-redux';
import Comment from './../Comment/Comment';


const CommentList = ({ comments }) => {
  const commentList = comments.map(comment => {
    return (
      < Comment
        key={comment.id}
        {...comment}
      />
    )
  })

  return (
    <div className="container-list">
      {commentList}
    </div>
  )
};

const connectReduxStateToProps = (store) => ({
  comments: store.comments
})

const List = connect(connectReduxStateToProps, null)(CommentList);

export default List