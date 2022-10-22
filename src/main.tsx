import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #0B0B0F;
    padding: 0px;
    margin: 0px;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
