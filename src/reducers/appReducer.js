import constants from '../constants/appConstants';


const initialState = [];

export const appReducer = (state = initialState, action) => {
  const { ADD, DELETE, EDIT } = constants;

  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter(item => item.id !== action.payload.id
      )

    case EDIT:
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        } else {
          return ({
            author: item.author,
            comment: action.payload.comment,
            id: item.id,
            rate: action.payload.rate,
          })
        }
      });

    default:
      console.warn(`There isn't action: ${action.type}`)
      return state;
  }
};