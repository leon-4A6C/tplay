export default function reducer(state = {
  tmdbId: 1399,
  title: "Game of Thrones",
  type: "tv"}, action) {
  switch (action.type) {

    case "ITEM_CLICK":
      return {...state, ...action.payload};
      break;

    default:
      return {...state}
  }
}
