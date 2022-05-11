import {lazy} from 'react';

const routesMian = [
    {
        title: "Home",
        path: "/",
        component: lazy(() => import('../Components/Home/index')),
        exact: true
    },
    {
        title: "About",
        path: "/about",
        component: lazy(() => import('../Components/AboutUs/index')),
        exact: true
    },
    {
        title: "Product",
        path: "/product",
        component: lazy(() => import('../Components/Product/index')),
        exact: true
    },
    {
        title: "Detail",
        path: "/product/:id",
        component: lazy(() => import('../Components/ProductDetail/index')),
        exact: true
    },
    {
        title: "Basket",
        path: "/basket",
        component: lazy(() => import('../Components/Basket/index')),
        exact: true
    },
    {
        title: "Wish",
        path: "/wish",
        component: lazy(() => import('../Components/WishList/index')),
        exact: true
    },
    {
        title: "Delivary",
        path: "/delivary",
        component: lazy(() => import('../Components/Delivary/index')),
        exact: true
    },
    {
        title: "ContactUs",
        path: "/contact_us",
        component: lazy(() => import('../Components/ContactUs/index')),
        exact: true
    },
    {
        title: "Cart",
        path: "/cart",
        component: lazy(() => import('../Components/Cart/index')),
        exact: true
    },
    {
        title: "Terms",
        path: "/terms",
        component: lazy(() => import('../Components/Terms/index')),
        exact: true
    },
    {
        title: "Success",
        path: "/success",
        component: lazy(() => import('../Components/Success/index')),
        exact: true
    },
    {
        title: "Fail",
        path: "/fail",
        component: lazy(() => import('../Components/Fail/index')),
        exact: true
    }
]

export default routesMian;