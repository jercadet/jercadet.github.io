import './styles/App.css';
import Header from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import ExpPage from './expPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
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
