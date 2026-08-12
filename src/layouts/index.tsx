import "../App.css";
import Header from "./header";
import Footer from "./footer";
import RouterLayout from "./router";

const Layout = () => {
  return (
    <div id="layout-root">
      <Header />
      <RouterLayout />
      <Footer />
    </div>
  );
};

export default Layout;
