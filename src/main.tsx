import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ActivitiesProvider } from './context/ActivitiesProvider'
import { CompletedListProvider } from './context/CompletedListProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
	<ActivitiesProvider>
		<CompletedListProvider>
			<App />
		</CompletedListProvider>		
	</ActivitiesProvider>
</React.StrictMode>,
)
