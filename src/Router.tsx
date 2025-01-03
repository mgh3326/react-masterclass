import {createBrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import Header from "./componentes/Header";
import About from "./screens/About";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }

]);
export default router;