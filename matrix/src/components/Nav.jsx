import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { useGlobalContext } from "../../context/GlobalContext";
import { useGlobalContext } from "../context/GlobalContext";

export const Nav = () => {
  const { state, setState, contactState, setContactState } = useGlobalContext();

  const toggleContact = () => {
    setContactState(true);
    setState(false);
  };

  return (
    <header className="nav-open cursor-pointer">
      <div className="header">
        <Link  to="/" title="Matrix Solutions" className="logo ir">
          Matrix
        </Link>
        <div onClick={() => setState(false)} className="menu ir active">
          Menu
        </div>
        <div className="contact-icon ir" onClick={toggleContact}>
          contact-icon
        </div>
        <nav>
          <div className="middle-nav">
            <div className="middle-cell">
              <ul>
                <li onClick={() => setState(false)}>
                  <HashLink smooth to="#our-clients" className="scroll">
                    Our clients
                  </HashLink>
                </li>
                <li onClick={() => setState(false)}>
                  <HashLink smooth to="#recent-work" className="scroll">
                    Recent work
                  </HashLink>
                </li>
                <li onClick={() => setState(false)}>
                  <HashLink smooth to="#what-we-do" className="scroll">
                    What we do
                  </HashLink>
                </li>
                <li onClick={() => setState(false)}>
                  <HashLink smooth to="#our-technologies" className="scroll">
                    Our technologies
                  </HashLink>
                </li>
                <li onClick={() => setState(false)}>
                  <HashLink smooth to= "#why-to-choose-us" className="scroll">
                    Why choose us
                  </HashLink>
                </li>
                <li>
                  <HashLink   className="scroll c-ac" onClick={toggleContact}>
                    Contact us
                  </HashLink>
                </li>
                <li onClick={() => setState(false)}>
                <Link className="blogs" to={"/blogs"}>
                Blogs
                </Link>
                </li>
                <li onClick={() => setState(false)}>
                <Link className="services" to={"/services"}>
                Services
                </Link>
                </li>
                <li onClick={() => setState(false)}>
                <Link className="services" to={"/our-work"}>
                Our work
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
