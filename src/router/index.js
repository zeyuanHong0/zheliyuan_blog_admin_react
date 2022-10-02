// import { Fragment } from "react";
// Fragment组件不会渲染实际的dom，只是提供一个空的组件。
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../pages/layout";
import Home from "../pages/home";
import Adminuser from "../pages/adminUser";
import Notfound from "../pages/notfound";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="adminuser" element={<Adminuser />}></Route>
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </HashRouter>
  );
}
