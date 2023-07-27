import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import { ReorderTwoTone } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button 
          onClick={() => {
            setExpandNavBar(!expandNavBar);
          }
        }><ReorderTwoTone /></button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="*"></Link>
      </div>
    </div>
  )
}
