import { constants } from '../constants/appConstants';


const initialState = [];

export const appReducer = (state = initialState, action) => {
  const { ADD, DELETE, EDIT } = constants;

  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      const { id } = action.payload;

      return state.filter(item => item.id !== id
      )

    case EDIT:
      const { comment, rate } = action.payload;

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