import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import './css/base.css';

const app = createRoot(document.getElementById('root'))
app.render(<App />)
