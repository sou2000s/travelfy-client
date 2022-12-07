import { createBrowserRouter } from "react-router-dom"

import AddTour from "../components/AddTour/AddTour"
import Blogs from "../components/Blogs/Blogs"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Main from "../components/MainLayout/Main"
import MyReview from "../components/MyReview/MyReview"
import Register from "../components/Register/Register"
import TourDetails from "../components/TourDetails/TourDetails"

import Tours from "../components/Tours/Tours"
import PrivateRoute from "./PrivateRoute"


  const routes =  createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                loader: ()=> fetch('https://travelfy.vercel.app/hometours'),
                element: <Home></Home>
            },
            {
                path: '/tours',
                loader: ()=> fetch('https://travelfy.vercel.app/tours'),
                element:<Tours/>
            },
            {
                path:'/addtour',
                element:<PrivateRoute><AddTour/></PrivateRoute>
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview/></PrivateRoute>
            },
            {
                path:'/tours/:id' , 
                loader: ({params})=> {
                    return fetch(`https://travelfy.vercel.app/tours/${params.id}`)
                },
                element:<TourDetails/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            }
        ]
    }
  ])
 






 export default routes