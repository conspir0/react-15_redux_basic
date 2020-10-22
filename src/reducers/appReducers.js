import constants from './../constants/appConstants';


const initialState = [];

const appReducer = (state = initialState, action) => {
  const { ADD, DELETE, EDIT } = constants;
  const { comment, id, rate } = action.payload;

  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter(item => item.id !== id
      )

    case EDIT:
      return state.map(item => {
        if (item.id !== id) {
          return state;
        } else {
          return ({
            author: item.author,
            comment,
            id: item.id,
            rate,
          })
        }
      });

    default:
      console.warn(`There isn't action: ${action.type}`)
      return state;
  }
};