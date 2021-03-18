import React, { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

const TransactionTable = () => {
  useEffect(() => {
    api.get("/transctions").then((response) => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>€12000</td>
            <td>Desenvolvimento </td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='withdraw'>-€1000</td>
            <td>Desenvolvimento </td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>€12000</td>
            <td>Desenvolvimento </td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionTable
