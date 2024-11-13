import OpenModal from "../PlusIcon_ToOpen_Modal/OpenModal";

const LefisliderMob = () => {
  return (
    <div>
      <div className="row  d-sm-none d-block  fixed-top ">
        <nav className=" navbar navbar-dark bg-dark  p-2 ">
          <div className="container-fluid">
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start text-bg-dark w-75"
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
      </div>
      <OpenModal />
    </div>
  );
};

export default LefisliderMob;
