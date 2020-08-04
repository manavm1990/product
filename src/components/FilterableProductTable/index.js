import React, { useEffect, useState } from "react"

import { ProductTable } from "./ProductTable"
import { FilterBar } from "./FilterBar"

import api from "api"

export const FilterableProductTable = () => {
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(null)
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    ;(async () => {
      setProducts(await api.index())
    })()
  },
    // Prevent 'useEffect' from firing on all mounts - and only on updates.
    // The 2nd argument specifies specific pieces of state to trigger the effect on when mounting.
    // Since this an empty array, we prevent unnecessary 'effects.'
    [])

  const filterHandler = ({ target: { type, checked, value } }) => {
    switch (type) {
      case "checkbox":
        setInStockOnly(checked)
        break
      case "number":
        setMaxPrice(value)
        break
      default:
        setSearchText(value)
    }
  }

  const filteredProducts = products
    .filter(({ name }) =>
      name.toLowerCase().startsWith(searchText.toLowerCase())
    )
    .filter(({ stocked }) => (inStockOnly ? stocked : true))
    .filter(({ price }) =>
      maxPrice ? Number.parseFloat(price.slice(1)) <= maxPrice : true
    )

  return (
    <main className="flex flex--align-center flex--column">
      <FilterBar handler={filterHandler} />
      <ProductTable products={filteredProducts} />
    </main>
  )
}
