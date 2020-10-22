import constants from './../constants/appConstants';


export const addComment = ({ author, comment, rate }) => ({
  type: constants.ADD,
  payload: {
    author,
    comment,
    id: Math.floor(Math.random() * 1234),
    rate,
  }
});

export const deleteComment = id => ({
  type: constants.DELETE,
  payload: {
    id
  }
});

export const editComment = ({ author, comment, id, rate }) => ({
  type: constants.EDIT,
  payload: {
    author,
    comment,
    id,
    rate
  }
});

// const editComment = ({data) => ({
//   type: constants.EDIT,
//   payload: {...data}
// });