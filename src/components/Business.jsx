import React from 'react'

import BusinessList from './BusinessList'
import SearchBar from './SearchBar'

function Business ({ data }) {
  return (
    <div>
      <SearchBar />
      <BusinessList data={data} />
    </div>
  )
}

export default Business
