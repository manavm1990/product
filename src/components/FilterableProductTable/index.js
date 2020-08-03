import React from "react"

import { ProductTable } from "./ProductTable"
import { FilterBar } from "./FilterBar"

import api from "api"

export class FilterableProductTable extends React.Component {
  state = {
    inStockOnly: false,
    maxPrice: null,
    products: [],
    searchText: "",
  }

  async componentDidMount() {
    this.setState({ products: await api.index() })
  }

  filterHandler = ({ target: {type, checked, value} }) => {
    if (type === "checkbox") {
      this.setState({ inStockOnly: checked })
    } else {
      this.setState({ searchText: value })
    }
  }

  render() {
    const filteredProducts = this.state.products
      .filter(({ name }) =>
        name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
      )
      .filter(({ stocked }) => (this.state.inStockOnly ? stocked : true)).filter(({price}) => this.state.maxPrice ? Number.parseFloat(price.slice(1)) <= this.state.maxPrice : true)

    return (
      <main className="flex flex--align-center flex--column">
        <FilterBar handler={this.filterHandler} />
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}
