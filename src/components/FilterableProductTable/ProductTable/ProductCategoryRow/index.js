import PropTypes from 'prop-types'
import React from 'react'

export const ProductCategoryRow = ({category}) => <tr><td>{category}</td></tr>

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
}
