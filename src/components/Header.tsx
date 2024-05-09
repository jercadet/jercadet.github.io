import "../styles/Header.css";

export default function Header() {

  return (
    <header className=" sm:visible sm:relative z-10">
      <nav className="sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:backdrop-blur">
        <ul className="hidden sm:flex sm:justify-center sm:space-x-40 sm:py-3 sm:border-b-2 sm:border-slate-700">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav> 
    </header>
  )
}
