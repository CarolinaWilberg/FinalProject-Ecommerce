import { useState, createContext, useContext } from 'react'

const FavContext = createContext()

export const useFavContext = () => useContext(FavContext)

export const FavProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState([])

  const addFavorite = (product) => {
    const favorites = isFavorite.find((item) => item.id === product.id)
    if (!favorites) {
      setIsFavorite([...isFavorite, product])
      console.log(favorites, isFavorite)
    }
  }

  const removeFavorite = (product) => {
    const wishList = isFavorite.filter((item) => item.id !== product.id)
    setIsFavorite(wishList)
  }

  const emptyFavorites = () => {
    setIsFavorite([])
  }
  return (
    <FavContext.Provider
      value={{ isFavorite, addFavorite, removeFavorite, emptyFavorites }}
    >
      {children}
    </FavContext.Provider>
  )
}
