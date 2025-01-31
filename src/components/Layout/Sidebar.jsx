import { IconContext } from "react-icons";
import { BsQrCode } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const hiddenSidebar = () => {
    document.querySelector(".hidden-Sidebar").classList.remove("show-Sidebar");
  };

  return (
    <div className="sidebar position-relative bg-light border-end border-1 py-5 px-3">
      <p className="cross-icon d-block d-md-none" onClick={hiddenSidebar}>
        <IconContext.Provider value={{ size: 32, className: "mb-2" }}>
          <RxCrossCircled />
        </IconContext.Provider>
      </p>

      <div className="logo-box mb-5">
        <a className="navbar-brand text-dark text-center" href="#">
          <p>
            <IconContext.Provider value={{ size: 32, className: "mb-2" }}>
              <BsQrCode />
            </IconContext.Provider>
          </p>
          <p> QR Code Generator</p>
        </a>
      </div>
      <ul className="d-flex flex-column gap-2 px-0">
        <li>
          <NavLink to="/" className="text-dark py-2 px-3">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/urlToQR" className="text-dark py-2 px-3">
            Url to QR
          </NavLink>
        </li>
        <li>
          <NavLink to="/numberToQR" className="text-dark py-2 px-3">
            Number to QR
          </NavLink>
        </li>
        <li>
          <NavLink to="/addressToQR" className="text-dark py-2 px-3">
            Address to QR
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
