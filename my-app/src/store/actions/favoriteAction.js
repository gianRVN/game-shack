export const addFavorite = (hero) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_FAVORITE",
        payload: hero
      })
    } catch (err) {
      dispatch({
        type: "ERROR_FAVORITE",
        payload: 'error'
      })
    }
  }
}
