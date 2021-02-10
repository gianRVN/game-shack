const initialState = {
  loading: true,
  error: false,
  favorites: []
}

const favoriteReducer = (state=initialState, action) => {
  switch(action.type) {
    case("ADD_FAVORITE"):
    if(state.favorites.length === 0) {
      return {...state, favorites: state.favorites.concat(action.payload), loading: false} 
    }
    let temp = []
    let check = false
    for (let i = 0; i < state.favorites.length; i++) {
      if(+state.favorites[i].id !== +action.payload.id) {
        temp.push(state.favorites[i])
      } else {
        check = true
      }
    }
    if (!check) {
      return {...state, favorites: state.favorites.concat(action.payload), loading:false}
    } else {
      return {...state, loading: false}
    }
    case("ERROR_FAVORITE"):
      return {...state, error: true}
    default: 
      return state
  }
}

export default favoriteReducer