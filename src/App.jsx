import { useState } from 'react'

import './App.css'

import { businesses } from './mocks/yelp_data.json'

import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'

import useFetch from './hooks/useFetch'

const api = { url: import.meta.env.VITE_URL }
const url = api.url

function App () {
  const [search, setSearch] = useState({
    // term: 'bar',
    // location: 'chicago',
    // sortBy: 'best_match'
  })

  const { fetchData, loading } = useFetch(url, search)

  return (
    <>
      <h1>Ravenous</h1>
      <div className='container'>
        <SearchBar setSearch={setSearch} />
        {loading && <Loader />}
        <BusinessList data={fetchData ? fetchData.businesses : businesses} />
      </div>
    </>
  )
}

export default App
