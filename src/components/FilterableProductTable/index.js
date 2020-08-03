import React from "react"

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

  searchHandler = ({ target }) => {
    this.setState({ searchText: target.value })
  }

  render() {
     const filteredProducts = this.state.products.filter(({ name }) =>
      name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    )
    return (
      <main className="flex flex--align-center flex--column">
        <SearchBar handler={this.searchHandler} />
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}
