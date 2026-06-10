import { createRoot } from 'react-dom/client'
import NavBar from './Components_JSX/NavBar.jsx'
import Body from  './Components_JSX/Body.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <Body />
  </>
)
