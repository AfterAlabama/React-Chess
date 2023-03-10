import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
  )