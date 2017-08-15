export default function action(tmdbId, title, type) {
  return {
    type: "ITEM_CLICK",
    payload: {
      tmdbId: tmdbId,
      title: title,
      type: type
    }
  }
}
