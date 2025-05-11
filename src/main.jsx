import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home';
import Root from './Root';
import ErrorPage from './ErrorPage/ErrorPage';
import ProductCard from './ProductCard/ProductCard';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './ProductDetails/ProductDetails';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import { Toaster } from 'react-hot-toast';
import Support from './NewPart/Support';
import Product from './Product/Product';








const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },   
        {
          path: "products/:product_id",
          element: <ProductCard></ProductCard>,
          loader: () => fetch(`../data/products.json`),
     },
  
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch(`../data/products.json`),

      },
      {
        path: "/dashboard/cart",
        element: <Dashboard></Dashboard>,
        loader: () => fetch(`../data/products.json`),

      },
      {
        path: "/dashboard/wishlist",
        element: <Dashboard></Dashboard>,
        loader: () => fetch(`../data/products.json`),

      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
       
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
          {
            path: "/product/:productId",
            element: <ProductDetails></ProductDetails>,
            loader: () => fetch(`../data/products.json`),
           
          },
          {
            path: "/product",
            element: <Product></Product>
          }

    ]},
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
  <RouterProvider router={router} />
  </StrictMode>,
)
