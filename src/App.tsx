import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Layout from "./Components/layout";
import Projects from "./pages/Projects";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience/*" element={<Experience />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/projects/*" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
