import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetail from "../Pages/BookDetails/BookDetail";
import WishList from "../Pages/WishList/WishList";


export const router =createBrowserRouter([
    
    {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            index:true,
            path: '/',
            element:<Home/>,
            hydrateFallbackElement: <p>loadding...</p>,
            loader:()=> fetch('booksData.json')
        }
        ,{
            path: '/about',
            element: <About/>
        },
        {
            path: '/bookDetails/:id',
            element: <BookDetail/>,
            loader:()=> fetch('booksData.json')
        },
        {
            path:'/wishList/:id',
            element: <WishList/>,
            loader:()=> fetch('booksData.json')
        }
    ]
  },
])