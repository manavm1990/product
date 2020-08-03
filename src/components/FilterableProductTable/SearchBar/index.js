import PropTypes from 'prop-types'
import React from "react"

// TODO: Receive a prop so this dumb 🧒🏽 knows what to do...
export const SearchBar = ({ handler }) => {
  const handleChange = (event) => {
    handler(event)
  }

    return <div className="flex flex--column flex--align-center">
      <input type="search" onChange={handleChange} />
      <label>
        <input type="checkbox" />
      In Stock Only
    </label>
    </div>
}

SearchBar.propTypes = {
  handler: PropTypes.func
}
