import React, { Fragment } from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"

export class FilterableProductTable extends React.Component {
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
