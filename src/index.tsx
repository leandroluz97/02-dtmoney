import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createServer, Model } from "miragejs"

createServer({
  //define our database
  models: {
    //defing the database name: transaction
    transaction: Model,
  },

  //creating pre-data so our db doesn't start empty
  seeds(server) {
    server.db.loadData({
      //db nam ein plural
      transactions: [
        {
          id: 1,
          title: "Freelqancer de website",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2012-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Renda de casa",
          type: "withdraw",
          category: "dev",
          amount: 1100,
          createdAt: new Date("2012-02-14 11:00:00"),
        },
      ],
    })
  },

  //define routes
  routes() {
    //all routes that strt with api
    this.namespace = "api"

    this.get("/transactions", () => {
      //getting all data from our Model database
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      //inserting our post data do our Model database
      return schema.create("transaction", data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
