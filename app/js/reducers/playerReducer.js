export default function reducer(state = {}, action) {
  switch (action.type) {

    case "PLAYER_PLAY_TRAILER":
      return {...state, action: action.type, trailer: action.payload.link}
      break;

    default:
      return {...state}
  }
}
