import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createServer } from "miragejs"

createServer({
  //define routes
  routes() {
    //all routes that strt with api
    this.namespace = "api"

    this.get("/transctions", () => {
      return [
        {
          id: 1,
          title: "transctions 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ]
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
