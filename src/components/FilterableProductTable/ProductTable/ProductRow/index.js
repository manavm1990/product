import PropTypes from "prop-types"
import React from "react"

export const ProductRow = ({ name, price }) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
)

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
}
