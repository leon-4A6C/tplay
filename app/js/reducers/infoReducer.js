export default function reducer(state = { info: {
  tmdbId: 1399,
  title: "Game of Thrones",
  type: "tv"}}, action) {
  switch (action.type) {

    case "ITEM_CLICK":
      return {...state, info: {...action.payload}};
      break;

    default:
      return {...state}
  }
}
