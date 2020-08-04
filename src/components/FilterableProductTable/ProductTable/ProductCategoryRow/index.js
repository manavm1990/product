import PropTypes from 'prop-types'
import React from 'react'

export const ProductCategoryRow = ({category}) => <tr><th>{category}</th></tr>

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
}
