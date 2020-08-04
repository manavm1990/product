import PropTypes from "prop-types"
import React, { Fragment } from "react"

import { ProductCategoryRow as CatRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

export const ProductTable = ({ products }) => {
  const categorizedProducts = products.reduce(
    (categorizedProds, product) => {
      // If yes, then we can 'add the current product' onto that array
      const { category } = product

      // Interpolate the actual value of 'category' (instead of "category")
      categorizedProds[category] = categorizedProds[category]
        ? // TODO: Check out why 'push' doesn't work
          categorizedProds[category].concat(product)
        : // Start a new array by wrapping the product in an Array
          [product]

      return categorizedProds
    },
    // Initialize the accumulator as an object
    {}
  )

  const renderProductRows = (prods) =>
    prods.map(({ name, price, stocked }, i) => (
      <ProductRow name={name} price={price} stocked={stocked} key={i} />
    ))

  const renderTable = () =>
    Object.keys(categorizedProducts).map((cat, i) => (
      <Fragment key={i}>
        <CatRow category={cat} />
        {renderProductRows(categorizedProducts[cat])}
      </Fragment>
    ))

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
}
