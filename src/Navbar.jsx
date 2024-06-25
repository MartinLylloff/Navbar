import { links, social } from "./data";
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />

          <button onClick={toggleLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={social.id}>
                  <a
                    href={link.url}
                    style={{ marginRight: "10px" }}
                    key={link.id}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((social) => {
            return (
              <li key={social.id}>
                <a
                  href={social.url}
                  style={{ marginRight: "10px" }}
                  key={social.id}
                >
                  {social.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
