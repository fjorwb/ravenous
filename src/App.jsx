import { useState } from 'react'

import './App.css'

import { businesses } from './mocks/yelp_data.json'

import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

const initialData = businesses

function App () {
  const [data, setData] = useState(initialData)

  console.log('app ', data)

  return (
    <>
      <h1>Ravenous</h1>
      <div className='container'>
        <SearchBar data={data} setData={setData} />
        <BusinessList data={data} />
      </div>
    </>
  )
}

export default App
