import './App.css'

import { businesses } from './mocks/yelp_data.json'

import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App () {
  return (
    <>
      <h1>Ravenous</h1>
      <div className='container'>
        <SearchBar />
        <BusinessList data={businesses} />
      </div>
    </>
  )
}

export default App
