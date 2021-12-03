import React from "react"
import ReactDOM from "react-dom"
// import { BrowserRouter as Router } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom"

import App from "./App"
// import firebase from "./lib/firebase"

// import FirebaseContext from "./context/firebase"

import GlobalStyle from "./globalStyles"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      {/* <FirebaseContext.Provider value={firebase}> */}
      <App />
      {/* </FirebaseContext.Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
