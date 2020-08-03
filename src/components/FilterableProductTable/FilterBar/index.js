import PropTypes from 'prop-types'
import React from "react"

// TODO: Receive a prop so this dumb 🧒🏽 knows what to do...
export const FilterBar = ({ handler }) => {
  const handleChange = (event) => {
    handler(event)
  }

    return (
      <div className="flex flex--column flex--align-center">
        <input type="search" onChange={handleChange} />
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
