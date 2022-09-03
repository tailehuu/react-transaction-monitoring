import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Alert from "./pages/Alert"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />

        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute path="/alerts">
          <Alert />
        </PrivateRoute>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
