import { createRoot } from 'react-dom/client'
import ThemeProvider from './Context/ThemeContext.jsx';
import App from './App.jsx'
import "./index.css"
import './css/base.css';
import './css/components.css';


const app = createRoot(document.getElementById('root'))
app.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
