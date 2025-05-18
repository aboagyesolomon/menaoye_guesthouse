import React from "react";

const DashBoard =  React.lazy(() => import("../views/DashBoard"));
const Contact =  React.lazy(() => import("../views/Contact"));
const About =  React.lazy(() => import("../views/About"));
const BookOnline = React.lazy(() => import("../views/BookOnline"));

const Blog = React.lazy(() => import("../views/Blog"));
const Gallery = React.lazy(() => import("../views/Gallery"));
const Room = React.lazy(() => import("../views/Room"));

const routes = [
    {path: "/dashboard", name:"DashBoard", component: DashBoard},
    {path: "/contact", name: "Contact", component: Contact},
    {path: "/about", name:"About", component: About},
    {path: "/bookonline", name:"BookOnline", component: BookOnline},

    {path:"/blog", name:"Blog", component: Blog},
    {path:"/gallery", name:"Gallery", component: Gallery},
    {path:"/room", name:"Room", component: Room}
];

export default routes;