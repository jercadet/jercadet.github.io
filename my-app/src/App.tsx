import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ExpPage from './Experience';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<ExpPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
