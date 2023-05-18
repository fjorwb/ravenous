import { useState } from 'react'

import styles from './SearchBar.module.css'

// import useToggle from '../hooks/useToggle'

const sortOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

function SearchBar ({ data, setData }) {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [sortBy, setSortBy] = useState('best_match')

  const getSortBy = sortByOption => {
    if (sortBy === sortByOption) {
      return styles.active
    }
    return ''
  }

  const handleSortByChange = sortByOption => {
    setSortBy(sortByOption)
  }

  if (sortBy === 'best_match') {
    console.log('best match')
  } else if (sortBy === 'rating') {
    console.log('rating')
    setData(data.sort((a, b) => b.rating - a.rating))
    console.log(data)
  } else if (sortBy === 'review_count') {
    console.log('review count')
    setData(data.sort((a, b) => b.review_count - a.review_count))
    console.log(data)
  }

  function handleTermChange (e) {
    setTerm(e.target.value)
  }

  function handleLocationChange (e) {
    setLocation(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log('Submitted', term, location)
    setTerm('')
  }

  const rendersortOptions = () => {
    return Object.keys(sortOptions).map(sortByOption => {
      const sortByOptionValue = sortOptions[sortByOption]
      return (
        <li
          className={getSortBy(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue)
          }}
        >
          {sortByOption}
        </li>
      )
    })
  }

  return (
    <div>
      <div className={styles.SearchBarSortOptions}>
        <ul>{rendersortOptions()}</ul>
      </div>
      <form className={styles.form}>
        <div className={styles.bars}>
          <input
            type='text'
            placeholder='term'
            name='term'
            onChange={handleTermChange}
            value={term}
          />
          <input
            type='text'
            placeholder='location'
            name='location'
            onChange={handleLocationChange}
            value={location}
          />
        </div>
        <button className={styles.btn} type='submit' onClick={handleSubmit}>
          Let's go
        </button>
      </form>
    </div>
  )
}

export default SearchBar
