import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@assets/styles/App.css'
import AppHeader from './layouts/AppHeader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <AppHeader/>
    </QueryClientProvider>
  );
}

export default App
