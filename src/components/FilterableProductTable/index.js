import React, { useState } from "react"

import { ProductTable } from "./ProductTable"
import { FilterBar } from "./FilterBar"

import api from "api"

export const FilterableProductTable = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  async componentDidMount() {
    this.setState({ products: await api.index() })
  }

  const filterHandler = ({ target: { type, checked, value } }) => {
    switch (type) {
      case 'checkbox':
        setInStockOnly(checked)
        break;
      case 'number':
        setMaxPrice(value)
        break;
      default:
        setSearchText(value)
    }
  }

  const filteredProducts = this.state.products
      .filter(({ name }) =>
        name.toLowerCase().startsWith(searchText.toLowerCase())
      )
      .filter(({ stocked }) => (inStockOnly ? stocked : true))
      .filter(({ price }) =>
        this.state.maxPrice
          ? Number.parseFloat(price.slice(1)) <= maxPrice
          : true
      )

    return (
      <main className="flex flex--align-center flex--column">
        <FilterBar handler={filterHandler} />
        <ProductTable products={filteredProducts} />
      </main>
    )
}
