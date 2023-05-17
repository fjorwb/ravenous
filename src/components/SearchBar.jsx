import { useState } from 'react'

import styles from './SearchBar.module.css'

function SearchBar () {
  const [search, setSearch] = useState('')

  console.log(search)

  function handleSubmit (e) {
    e.preventDefault()
    console.log('Submitted', search)
    setSearch('')
  }

  return (
    <div>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='Search'
          name='search'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SearchBar
