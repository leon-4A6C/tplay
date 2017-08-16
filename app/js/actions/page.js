import tmdb from "../tmdb";

export function request(type, page) {
  return (dispatch) => {
    dispatch({type: "PAGE_REQUEST_START"});
    tmdb[type].popular({page: page}).then(res => {
      dispatch({type: "PAGE_REQUEST_SUCCES", payload: res});
    }).catch(e => dispatch({type: "PAGE_REQUEST_FAIL", payload: {error: e}}));
  }
}
