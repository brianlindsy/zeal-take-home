import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE } from "../actions"

const initialState = {
  recipeToDisplay: null, 
  isLoadingRecipe: false,
  error: null,
}

const fetchingRecipe = (state) => {
  return { ...state, isLoadingRecipe: true }
}


// I think the better way to do this is to actually update the recipes: [] array with the new
// info about the recipe and keep it there for later use as a type of cache instead of calling the /recipe/:id 
// everytime, but it adds a little more complexity and I ran out of time :)
const fetchedRecipe = (state, payload) => {
  return { ...state, isLoadingRecipe: false, recipeToDisplay: payload}
}

const failedRecipe = (state, payload) => {
  return { ...state, isLoadingRecipe: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return fetchingRecipe()
    case RECEIVE_RECIPE:
      return fetchedRecipe(state, payload)
    case FAIL_RECIPE:
      return failedRecipe(state, payload)
    default:
      return state
  }
}