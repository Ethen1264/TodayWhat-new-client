import ReactDOM from 'react-dom/client'
import TanstackProviders from '@util/lib/TanstackProviders'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <TanstackProviders>
    <App />
  </TanstackProviders>,
)
