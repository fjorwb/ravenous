import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch (url, search) {
  const [fetchData, setFetchData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const Bearer = `Bearer ${import.meta.env.VITE_API_KEY}`

  const params = `location=${search.location}&term=${search.term}&radius=5000&sort_by=${search.sortBy}&limit=20`

  const url2 = 'https://cors-anywhere.herokuapp.com/'

  const query = url2 + url + params

  const headers = {
    Authorization: Bearer
  }

  useEffect(() => {
    if (!url) {
      return
    }

    setLoading(true)
    axios
      .get(query, {
        headers,
        data: []
      })
      .then(response => {
        // console.log(response.data)
        setFetchData(response.data)
      })
      .catch(error => {
        // console.log(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, search])

  return { fetchData, loading, error }
}

export default useFetch
