export const GET_SEARCH = "GET_SEARCH"
export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const FAIL_SEARCH = "FAIL_SEARCH"
export const UPDATE_SEARCH = "UPDATE_SEARCH"

const fetchingSearch = () => ({
  type: GET_SEARCH,
})

const fetchedSearch = (payload) => ({
  type: RECEIVE_SEARCH,
  payload,
})

const failedSearch = (payload) => ({
  type: FAIL_SEARCH,
  payload,
})

const updateSearchTerms = (payload) => ({
  type: UPDATE_SEARCH,
  payload,
})

export const executeSearch = async (name, ingredients) => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, ingredients }),
  })
  const searchResults = await response.json()
  return searchResults
}

export const updateSearchState = (searchState) => {
  return (dispatch) => dispatch(updateSearchTerms(searchState))
}

// TODO: fix action
export const searchRecipes = (name, ingredients) => {
  return (dispatch) => {
    dispatch(fetchingSearch())
    return executeSearch(name, ingredients)
      .then((res) => dispatch(fetchedSearch(res)))
      .catch((err) => dispatch(failedSearch(err)))
  }
}
