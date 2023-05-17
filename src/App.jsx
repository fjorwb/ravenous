import './App.css'

import { businesses } from './mocks/yelp_data.json'

import Business from './components/Business'

function App () {
  return (
    <>
      <h1>Ravenous</h1>
      <Business data={businesses} />
    </>
  )
}

export default App
