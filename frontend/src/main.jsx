import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import authReducer from './slices/authSlice.js'
import tokenReducer from './slices/tokenSlice.js'
import userReducer from './slices/userSlice.js'
import { Toaster } from 'sonner'

const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    user: userReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" closeButton richColors />
    </Provider>
  </BrowserRouter>
)
