import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComparisonProducts from "./pages/comparisonProducts/comparisonProducts";
import Error from "./pages/error/error";
import InfoProducts from "./pages/infoProducts/infoProducts";
import MainProducts from "./pages/mainProducts/mainProducts";
import Menu from "./pages/menu/menu";
import Products from "./pages/products/products";
import Home from "./pages/home/home";
import Search from "./pages/search/search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/ComparisonProducts", element: <ComparisonProducts /> },
  { path: "/Error", element: <Error /> },
  { path: "/InfoProducts", element: <InfoProducts /> },
  { path: "/MainProducts", element: <MainProducts /> },
  { path: "/Menu", element: <Menu /> },
  { path: "/Products", element: <Products /> },
  { path: "/Search", element: <Search /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
