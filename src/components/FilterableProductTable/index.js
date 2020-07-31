import React, { Fragment } from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    searchText: "",
  }

  async componentDidMount() {
    const res = await fetch(
      "https://my-json-server.typicode.com/Claim-Academy-JS/products/products"
    )

    this.setState({ products: await res.json() })
  }

  render() {
    return (
      <Fragment>
        <p>FilterableProductTable</p>
        <ProductTable />
        <SearchBar />
      </Fragment>
    )
  }
}
