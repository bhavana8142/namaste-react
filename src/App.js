import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturentCard from "./components/RestaurnentCard";
import ResturentCardMenu from "./components/ResturentCardMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
    // authenictaion 
    const [userName, setUserName] = useState()

    useEffect(() => {
        // make api call for userName and password 
        const data = {
            name: 'bhavana',
        }
        setUserName(data.name)




    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div>
                <Header />
                <Outlet />


            </div>
        </UserContext.Provider>

    )
};

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={'loading.....'}> <About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resturents/:resId',
                element: <ResturentCardMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={'loading.....'}><Grocery /></Suspense>
            },



        ],
        errorElement: <Error />




    },


])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute} />);


