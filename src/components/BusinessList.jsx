import React from 'react'

import styles from './BusinessList.module.css'

function BusinessList ({ data }) {
  return (
    <div className={styles.container}>
      <ul>
        {data.map(business => {
          return (
            <li key={business.id} className='card'>
              <img src={business.image_url} alt={business.name} />
              <h3>{business.name}</h3>
              <p>{business.location.address1}</p>
              <p>{business.location.city}</p>
              <p>{business.location.zip_code}</p>
              {business.categories.map(category => {
                return <p key={category.alias}>{category.title}</p>
              })}
              <p>{business.rating}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BusinessList
