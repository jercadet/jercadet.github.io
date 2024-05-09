import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Layout from "./Components/leey";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/*" element={<Experience />} />
            <Route path="/contact/*" element={<Contact />} />
            {/* <Route path="*" Component={NotFound} /> */}
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
