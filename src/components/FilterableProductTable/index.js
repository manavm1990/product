import React from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"

import api from "api"

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    searchText: "",
  }

  async componentDidMount() {
    this.setState({ products: await api.index() })
  }

  searchHandler = ({target}) => {
    // TODO: Log whatever I type into search bar
    console.log(target.value)
  }

  render() {
    return (
      <main className="flex flex--align-center flex--column">
        <SearchBar handler={this.searchHandler}/>
        <ProductTable products={this.state.products} />
      </main>
    )
  }
}
