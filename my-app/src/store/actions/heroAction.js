export const fetchHeroes = (heroes) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.opendota.com/api/heroStats`)

      const data = await response.json()

      dispatch({
        type: "FETCH_HEROES",
        payload: data
      })
    } catch (err) {
      dispatch({
        type: "ERROR_HEROES",
        payload: 'error'
      })
    }
  }
}

export const searchHero = (hero) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SEARCH_HEROES",
        payload: hero
      })
    } catch (err) {
      dispatch({
        type: "ERROR_HEROES",
        payload: 'error'
      })
    }
  }
}
