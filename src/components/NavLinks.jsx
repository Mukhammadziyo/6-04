import { NavLink } from "react-router-dom";

export default function NavLikns() {
  return (
    <div className="mx-auto max-w-[1319px] w-full px-[50px]">
      <img src="../public/reklama.webp" alt="" />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink to={"/"}>
            <a className="btn btn-ghost text">
              <img src="../public/kun.uz logo.svg" alt="" />
            </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/ozbekiston"}>O'zbekiston</NavLink>
            </li>
            <li>
              <NavLink to={"/jahon"}>Jahon</NavLink>
            </li>
            <li>
              <NavLink to={"/iqtisodiyot"}>Iqtisodiyot</NavLink>
            </li>
            <li>
              <NavLink to={"/jamiyat"}>Jamiyat</NavLink>
            </li>
            <li>
              <NavLink to={"/sport"}>Sport</NavLink>
            </li>
            <li>
              <NavLink to={"/fan-texnika"}>Fan-texnika</NavLink>
            </li>
            <li>
              <NavLink to={"/nuqtayi-nazar"}>Nuqtayi nazar</NavLink>
            </li>
            <li>
              <NavLink to={"/audio"}>Audio</NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            O'zbekcha
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
          >
            <li>
              <a>Узбекча</a>
            </li>
            <li>
              <a>Русский</a>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>
        </div>
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </div>
  );
}
