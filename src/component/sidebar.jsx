
const Slidbar = ({selectedTab,setselectedTab }) => {

  return (
    <div 
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark slidebar"
      style={{width: "200px"}}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>{" "}
      </a>{" "}
      {" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item">
          {" "}
          <a href="#" className= {`nav-link text-white ${selectedTab ==="Home" && "active"}`}  aria-current="page"

          onClick={()=>setselectedTab("Home")}
         
          
          
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a href="#" className={`nav-link text-white ${selectedTab ==="Create post" && "active"}`} aria-current="page"

          onClick={() =>setselectedTab("Create post")}


          
            >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
           Create post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      {" "}
     
    </div>
  );
};
export default Slidbar;
