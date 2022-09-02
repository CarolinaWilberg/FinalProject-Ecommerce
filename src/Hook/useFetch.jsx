import { useState, useEffect } from 'react'
import qs from 'qs'

export const useFetch = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [filterProduct, setFilterProduct] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  const queryProduct = qs.stringify(
    {
      filters: {
        title: {
          $containsi: `${filterProduct}`,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  const queryCategory = qs.stringify(
    {
      filters: {
        categories: {
          name: {
            $containsi: `${filterCategory}`,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:1337/api/products?populate=image&populate=categories&pagination[page]=${page}&pagination[pageSize]=9&${queryProduct}&${queryCategory}`
    )
      .then((res) => res.json())
      .then((info) => {
        setLoading(false)
        setData(info)
      })
      .catch((err) => setError(err))
  }, [page, filterProduct, filterCategory])
  return {
    data,
    error,
    loading,
    page,
    setPage,
    setFilterProduct,
    setFilterCategory,
  }
}
