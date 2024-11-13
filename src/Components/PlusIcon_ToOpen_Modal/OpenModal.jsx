import leftCss from "../../Components/PlusIcon_ToOpen_Modal/plusIcon_modal.module.css";
const OpenModal = () => {
  return (
    <div className=" z-index-50  ">
      <button
        className={leftCss.addGroupBtn}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <p>+</p>
      </button>

      <div
        className="modal fade z-index-10 "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable z-index-20">
          <div className="modal-content z-index-30">
            <div className="modal-header ">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New group
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-6">
              <div className="container d-flex border align-items-center justify-content-around  ">
                <h5 className="m-0 p-0 fs-6">Group Name</h5>
                <input
                  type="text"
                  placeholder="Enter group name"
                  className="border-1 p-1 rounded-pill"
                  style={{ width: "60%" }}
                />
              </div>
              <div className="container border border-primary d-flex border align-items-center justify-content-between">
                <h5 className="m-0 p-0 fs-6">Choose colour</h5>
                <div className="border border-warning h-4 d-flex flex-wrap align-items-center justify-content-center gap-2 gap-xs-0">
                  <p
                    className=" m-0 p-0 rounded-circle d-flex align-items-center justify-content-center "
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#b58aff",
                    }}
                  >
                    1
                  </p>
                  <p
                    className="m-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#fb7cf0",
                    }}
                  >
                    1
                  </p>
                  <p
                    className="m-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#43e6fd",
                    }}
                  >
                    1
                  </p>
                  <p
                    className=" m-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#ee9679",
                    }}
                  >
                    1
                  </p>
                  <p
                    className=" m-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#0347fe",
                    }}
                  >
                    1
                  </p>
                  <p
                    className=" m-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#6990ff",
                    }}
                  >
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
