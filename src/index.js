import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { CurrencyProvider } from './context/CurrencyContext'
import { ProductProvider } from './context/ProductContext'

ReactDOM.render(
  <React.StrictMode>
    <CurrencyProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CurrencyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
