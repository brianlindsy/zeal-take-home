export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedRecipe = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})

export const executeSearchRecipeById = async (id) => {
  console.log(id)
  const response = await fetch("/api/recipe/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const recipe = await response.json()
  return recipe
}

export const searchRecipeById = (id) => {
  return (dispatch) => {
    dispatch(fetchingRecipe())
    return executeSearchRecipeById(id)
      .then((res) => dispatch(fetchedRecipe(res)))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}
