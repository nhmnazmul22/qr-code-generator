import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="row position-relative">
      <div className="col-12">
        <div className="row">
          <div className="hidden-Sidebar col-sm-3 col-lg-2 pe-0">
            <Sidebar />
          </div>
          <div className="grow-content col-sm-9 col-lg-10 ps-0">
            <div className="row">
              <div className="col-12 pe-0 pe-md-2">
                <Navbar />
              </div>
              <div
                className="col-12 pe-0 pe-md-2"
                style={{ minHeight: "85.8vh" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
