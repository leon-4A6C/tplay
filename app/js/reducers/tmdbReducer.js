export default function reducer(state = {}, action) {
  switch (action.type) {

    case "INFO_REQUEST_START":
      return {...state, action: action.type}
      break;
    case "INFO_REQUEST_SUCCES":
      return {...state, ...action.payload, action: action.type}
      break;
    case "INFO_REQUEST_FAIL":
      return {...state, ...action.payload, action: action.type}
      break;

    default:
      return {...state}
  }
}
