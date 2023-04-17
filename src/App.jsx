import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import NotFound from "./page/NotFound";
import Cart from "./page/Cart";
import Fashion from "./page/Fashion";
import Accessory from "./page/Accessory";
import Digital from "./page/Digital";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/notfound"} element={<NotFound />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/fashion"} element={<Fashion />}></Route>
        <Route path={"/accessory"} element={<Accessory />}></Route>
        <Route path={"/digital"} element={<Digital />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
