import { GET_SEARCH, RECEIVE_SEARCH, FAIL_SEARCH, UPDATE_SEARCH } from "../actions"

const initialState = {
  searchState: {term: "", ingredients: ["milk"]},
  recipes: null,
  isLoadingSearch: false,
  error: null,
}

const searchFetching = (state) => {
  return { ...state, isLoadingSearch: true }
}

const searchFetched = (state, payload) => {
  return { ...state, isLoadingSearch: false, recipes: payload }
}

const searchFailed = (state, payload) => {
  return { ...state, isLoadingSearch: false, error: payload }
}

const updateSearch = (state, payload) => {
  return {...state, searchState: payload}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH:
      return searchFetching()
    case RECEIVE_SEARCH:
      return searchFetched(state, payload)
    case FAIL_SEARCH:
      return searchFailed(state, payload)
      case UPDATE_SEARCH:
        return updateSearch(state, payload)
    default:
      return state
  }
}
