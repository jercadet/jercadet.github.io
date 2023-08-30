import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import ExpPage from './Experience';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<ExpPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
