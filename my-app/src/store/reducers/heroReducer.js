const initialState = {
  loading: true,
  error: false,
  heroes: []
}

const heroReducer = (state=initialState, action) => {
  switch(action.type) {
    case("FETCH_HEROES"):
      return {...state, heroes: action.payload, loading: false}
    case("SEARCH_HEROES"):
      const searchHero = state.heroes.filter(el => el.localized_name.includes(action.payload) )
      return {...state, heroes: searchHero, loading: false}
    case("ERROR_HEROES"):
      return {...state, error: true}
    default: 
      return state
  }
}

export default heroReducer