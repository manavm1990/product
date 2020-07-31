import React, { Fragment } from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"

import api from "api"

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    searchText: "",
  }

  async componentDidMount() {
    this.setState({ products: await api.index() })
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
