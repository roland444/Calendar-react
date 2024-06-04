import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from '@App'

// @/views
// @views... [/*] ==> @views/index


// @ === ./src/ => @views === ./src/views DOBRZE
// (@/*) @/views DOBRE DZIAŁANIE

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
