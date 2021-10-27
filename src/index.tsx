import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"
import HeroPage from "./Hero"
import MainPage from "./Main"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={["/login", "/signup"]} component={HeroPage} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
