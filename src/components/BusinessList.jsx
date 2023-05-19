import React from 'react'

import styles from './BusinessList.module.css'
import Business from './Business'

function BusinessList ({ data }) {
  return (
    <div className={styles.container}>
      <ul>
        {data.map(business => {
          return (
            <li key={business.id} className='card'>
              <Business business={business} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BusinessList
