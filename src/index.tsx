import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import { Page as SignInPage } from "./Sign/SignIn"
import { Page as SignUpPage } from "./Sign/SignUp"
import MainPage from "./Main"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
