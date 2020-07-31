import React, { Fragment } from "react";

import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"

export const FilterableProductTable = () => <Fragment>
  <p>FilterableProductTable</p>
  <ProductTable />
  <SearchBar />
</Fragment>
