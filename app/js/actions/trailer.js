export function play(yt) {
  return {
    type: "PLAYER_PLAY_TRAILER",
    payload: {
      link: yt
    }
  }
}
