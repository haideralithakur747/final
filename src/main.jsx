import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Counter from './Counter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'   // ✅ Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // ✅ Bootstrap JS + Popper (optional)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Counter /> */}
  </StrictMode>,
)
