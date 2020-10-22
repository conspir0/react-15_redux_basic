import constants from './../constants/appConstants';

const addComment = ({ author, comment, rate }) => ({
  type: constants.ADD,
  payload: {
    author,
    comment,
    id: Math.floor(Math.random * 1234567890),
    rate,
  }
});

const deleteComment = ({ id }) => ({
  type: constants.DELETE,
  payload: {
    id
  }
});

const editComment = ({ comment, id, rate }) => ({
  type: constants.EDIT,
  payload: {
    comment,
    id,
    rate
  }
});

// const editComment = ({data) => ({
//   type: constants.EDIT,
//   payload: {...data}
// });