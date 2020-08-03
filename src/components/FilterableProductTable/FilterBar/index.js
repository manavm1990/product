import PropTypes from 'prop-types'
import React from "react"

export const FilterBar = ({ handler }) => {
  const handleChange = (event) => {
    handler(event)
  }

    return (
      <div className="flex flex--column flex--align-center">
        <input type="search" onChange={handleChange} />

        {/* TODO: Add appropriate label */}
        <input type="number" onChange={handleChange} />

        <label>
          <input type="checkbox" onChange={handleChange} />
          In Stock Only
        </label>
      </div>
    )
}

FilterBar.propTypes = {
  handler: PropTypes.func
}
