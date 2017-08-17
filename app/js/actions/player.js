export function play(yt) {
  return {
    type: "PLAYER_PLAY_TRAILER",
    payload: {
      link: yt
    }
  }
}

export function close() {
  return {
    type: "PLAYER_CLOSE"
  }
}
