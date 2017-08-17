export default function reducer(state = {
  tmdbId: null,
  title: null,
  type: null}, action) {
  switch (action.type) {

    case "ITEM_CLICK":
      return {...state, type: action.type, ...action.payload};
      break;

    default:
      return {...state}
  }
}
