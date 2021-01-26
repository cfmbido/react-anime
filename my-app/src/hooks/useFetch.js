import { useState, useEffect } from  'react'

function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://kitsu.io/api/edge/trending/anime")
        .then(res => res.json())
        .then(({data}) => {
          setData(data)
          setLoading(false)
        })
        .catch(err => {
          setError(err)
        })
      }, [])

    return {
        data,
        loading,
        error
    }
}

export default useFetch