import React from 'react';
import { connect } from 'react-redux';
import Comment from './../Comment/Comment';


const List = ({ comments }) => {
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

const connectReduxStateToProps = (store) => ({
  comments: store.comments
})

const LiCommentListst = connect(connectReduxStateToProps, null)(List);

export default LiCommentListst