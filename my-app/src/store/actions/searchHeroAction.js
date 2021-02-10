export const searchHero = (hero) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SEARCH_HERO",
        payload: hero
      })
    } catch (err) {
      console.log(err)
    }
  }
}
