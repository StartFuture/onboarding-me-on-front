import './global.css';
import AppRoutes from './AppRoutes';
import {BrowserRouter} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <AppRoutes/> 
    </BrowserRouter>
  );
}

export default App; 
