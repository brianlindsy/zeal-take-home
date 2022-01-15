import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { hot } from "react-hot-loader"
import Home from "./Containers/Home"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const WrappedHome = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/recipe/:id">
          <Recipe/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Provider>
  </BrowserRouter>
)

const HotHome = hot(module)(WrappedHome)

ReactDOM.render(<HotHome />, document.getElementById("home"))
