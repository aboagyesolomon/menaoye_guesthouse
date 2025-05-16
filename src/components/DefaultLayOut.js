import React,{Suspense} from "react";
import {Route,Routes } from "react-router-dom";
import routes from './routes'
import PreLoader from "./PreLoader";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import DashBoard from "../views/DashBoard";

const DefaultLayOut = () => {

    const Loading = () => <div>Loading...</div>


    return(
        <div className="App">
        <PreLoader/>
   
        <Header />
   
       
         <Suspense fallback={<Loading/>}>
            <Routes>
                {routes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={<route.component />} />)}
                <Route path="/" element={<DashBoard />} />
            </Routes>
        </Suspense> 

       
   
        <Footer />
       </div>
    )


};


export default DefaultLayOut;