const Footer = () => {
    return (
  <div className="container footer-container">
    {" "}
    <footer className="py-3 my-4">
      {" "}
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {" "}
        <li className="nav-item  footer-text" >
          <a href="#" className="px-2 text-body-light  ">
            Home
          </a>
        </li>{" "}
        <li className="nav-item footer-text">
          <a href="#" className="px-2 text-body-light ">
            Features
          </a>
        </li>{" "}
        <li className="nav-item footer-text">
          <a href="#" className="px-2 text-body-light ">
            Pricing
          </a>
        </li>{" "}
        <li className="nav-item footer-text">
          <a href="#" className="px-2 text-body-light ">
            FAQs
          </a>
        </li>{" "}
        <li className="nav-item footer-text">
          <a href="#" className="px-2 text-body-light ">
            About
          </a>
        </li>{" "}
      </ul>{" "}
      <p className="text-center text-body-light footer-text ">© 2025 Company, Inc</p>{" "}
    </footer>{" "}
  </div>
    );

};
export default Footer;
