import React from 'react'

import styles from './Business.module.css'

const placeholderImage =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

function Business ({ business }) {
  return (
    <div className={styles.container}>
      <img
        src={business.image_url ? business.image_url : placeholderImage}
        alt={business.name}
      />
      <h3 className={styles.title}>{business.name}</h3>
      <div className={styles.info}>
        <div className={styles.address}>
          <p>{business.location.address1}</p>
          <p>{business.location.city}</p>
          {/* <p>{business.location.zip_code}</p> */}
        </div>
        <div className={styles.other}>
          {Object.entries(business.categories)[0].map((category, index) => {
            return (
              <p className={styles.category} key={index}>
                {category.title}
              </p>
            )
          })}
          <p>rating: {business.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default Business
