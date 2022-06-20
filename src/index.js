import React from 'react'
import reactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { StarWarsApp } from './StarWarsApp'

reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <StarWarsApp />
        </BrowserRouter>
    </React.StrictMode>
)