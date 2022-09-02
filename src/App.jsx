// import { useState } from 'react'
import { Layout } from './components/Layout/Layout'
import {
  Home,
  Store,
  Cart,
  Error404,
  ProductDetail,
  Profile,
  WishList,
} from './Pages/index'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/my-cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wish-list" element={<WishList />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
