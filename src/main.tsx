import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@layouts/default'
import server from '@src/server/index'
import './main.css'

server({ environment: process.env.NODE_ENV })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
