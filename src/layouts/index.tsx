import "../App.css";
import Header from "./header";
import Footer from "./footer";
import RouterLayout from "./router";
import useGeneralStore from "../store/general";
import LocamotiveLogo from "../assets/locamotive-logo.svg";

const Layout = () => {
  const { isLoading } = useGeneralStore();

  return (
    <div id="layout-root">
      <Header />
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgb(0 0 0 / 0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            zIndex: 999,
          }}
        >
          <img
            className="loading-logo"
            src={LocamotiveLogo}
            alt="Locamotive Logo"
          />
          <p className="loading-text">Locamoting...</p>
        </div>
      )}
      <RouterLayout />
      <Footer />
    </div>
  );
};

export default Layout;
