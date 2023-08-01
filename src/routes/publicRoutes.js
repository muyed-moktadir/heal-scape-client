
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";


 // TODO:changing Routes
 export const publicRoutes=[
    {path:"/", name:"Home", Component: Home},
    {path:"/contact", name:"Contact", Component: Contact},
    {path:"/login", name:"Login", Component: Login},
  ]