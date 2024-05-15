import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change the threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={`navbar navbar-expand-lg px-0 py-4 sticky-top ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-xxl px-lg-5 px-3 z-3">
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="navbar-brand"
            href="#"
          >
            <img src="/nike.png" className="img-fluid" width={55} alt="" />
          </motion.a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-lg-4 gap-2 m-auto mb-2 mb-lg-0 px-lg-4 py-2 nav_list">
              <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
                <a
                  className="nav-link text-uppercase"
                  aria-current="page"
                  href=""
                >
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
                <a className="nav-link text-uppercase" href="">
                  Men
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
                <a
                  className="nav-link text-uppercase"
                  href=""
                  aria-disabled="true"
                >
                  Women
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
                <a
                  className="nav-link text-uppercase"
                  href=""
                  aria-disabled="true"
                >
                  Kids
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
                <a
                  className="nav-link text-uppercase"
                  href=""
                  aria-disabled="true"
                >
                  Features
                </a>
              </motion.li>
            </ul>
            <div className="d-lg-block d-none">
              <motion.button
                whileInView={{ backgroundColor: "black", color: "white" }}
                className="btn px-5"
              >
                Login
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
