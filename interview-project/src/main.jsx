import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient} from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
import {Provider} from 'react-redux'
import Store from './Component/Interview4/Store.jsx'
 

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <Provider store={Store} >
    <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
