import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazona</Link>
        </header>
        <main>
          <Routes>
            <Route
              path="/product/:slug"
              element={<ProductScreen></ProductScreen>}
            ></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
