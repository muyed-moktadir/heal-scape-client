/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Routes
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";

// authentication
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";

// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

// css
import "react-toastify/dist/ReactToastify.css";

function App() {
  // TODO: ------------------theme changed-------------
  const [dark, setDark] = useState(false);

  //TODO:````````````Animation adding```````````````````
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar dark={dark} setDark={setDark}>

        {/* TODO:  - - - - - - - - - - - -Children--  - --- - - - - - -  */}
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route
              dark={dark}
              key={index}
              path={path}
              element={<Component dark={dark} />}
            />
          ))}

          {/* TODO:--------------------------------private Route------------------*/}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route path={path} key={index} element={<Component />} />
            ))}
            {/* <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/> */}
          </Route>

          {/* TODO: ----------------------admin route---------------------------- */}

          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard dark={dark} />}>
              {/* TODO:---------NAsted route which find by dashboard outlet---------- */}
              <Route path="add-admin" element={<AddAdmin />}></Route>
              <Route path="add-service" element={<AddService />}></Route>
            </Route>
          </Route>
        </Routes>
        </Navbar>
        <Footer/>
        <ToastContainer />      
    </div>
  );
}

export default App;
