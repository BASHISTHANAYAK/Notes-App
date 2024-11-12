import "./App.css";
import MessagesRightSide from "./Components/Messages-RightSide/messages-RightSide";
import Pocket_Notes from "./Components/Pocket_Notes-LeftSide/pocket_Notes";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS with Popper

function App() {
  return (
    <div className="container-fluid border border-3 border-primary vh-100 ">
      <div className="row  d-sm-none d-block  fixed-top h-auto">
        {/* div open from right */}

        <nav className="w-15 navbar navbar-dark bg-dark  ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start text-bg-dark w-50"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Dark offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <ul>
                <li>
                  <span className="firstLetters">MN</span>{" "}
                  <span className="Names">My Name</span>{" "}
                </li>
                <li>
                  <span className="firstLetters">MN</span>{" "}
                  <span className="Names">My Name</span>{" "}
                </li>
                <li>
                  <span className="firstLetters">MN</span>{" "}
                  <span className="Names">My Name</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*div open from right  */}
      </div>
      <div className="row h-100">
        <div className="d-none d-sm-block col-sm-4 col-md-3 col-lg-2 border border-danger ">
          <Pocket_Notes />
        </div>
        <div className="col-12 col-sm-8 col-md-9 col-lg-10 border border-success">
          <MessagesRightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
