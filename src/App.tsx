import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ExpPage from "./pages/Experience";
import NotFound from "./NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/*" element={<ExpPage />} />
            <Route path="/contact/*" element={<Contact />} />
            {/* <Route path="*" Component={NotFound} /> */}
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
