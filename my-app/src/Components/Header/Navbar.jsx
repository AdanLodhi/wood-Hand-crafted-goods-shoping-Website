import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <nav className=" navbar navbar-expand-lg bg-light ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">HANDCRAFTS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link  className="nav-link active" aria-current="page" to ="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to ="/shop">SHOP</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ALL PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">HOME</Link></li>
                    <li><Link className="dropdown-item" to="/shop">SHOP</Link></li>
                    <li><Link className="dropdown-item" to="/about">ABOUT US</Link></li>
                    <li><Link className="dropdown-item" to="/cart">CART</Link></li>
                    <li><a className="dropdown-divider"></a></li>
                    <li><a className="dropdown-item" href="#"></a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/cart">CART</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;