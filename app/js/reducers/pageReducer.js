export default function reducer(state = {
  results: [],
  page: 0
}, action) {
  switch (action.type) {

    case "PAGE_REQUEST_START":
      return {...state, action: action.type}
      break;
    case "PAGE_REQUEST_SUCCES":
      return {...state, ...action.payload, action: action.type}
      break;
    case "PAGE_REQUEST_FAIL":
      return {...state, ...action.payload, action: action.type}
      break;

    default:
      return {...state}
  }
}
