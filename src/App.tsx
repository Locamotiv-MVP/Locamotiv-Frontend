import { useEffect } from "react";
import { debounce } from "lodash";
import Layout from "./layouts";
import useGeneralStore from "./store/general";

const App = () => {
  const { setScreenSize } = useGeneralStore();

  useEffect(() => {
    // Set the initial screen size immediately
    setScreenSize(window.innerWidth);

    const resizeScreen = debounce(() => {
      setScreenSize(window.innerWidth);
    }, 400);

    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
      resizeScreen.cancel();
    };
  }, [setScreenSize]);

  return <Layout />;
};

export default App;
