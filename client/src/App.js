import React, {useEffect} from "react";
import Layout from "./Layout";
import {Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Terms from "./Components/Terms";
import {useDispatch, useSelector} from "react-redux";
import {langGet} from "./Store/actions/productActions";
import ForgetPassword from "./Components/ForgetPassword";
import NotFound from "./Components/NotFound";
import RouteBuilder from "./Config/RouteBuilder";


function App() {

    const langValue = useSelector(state => state.productReducer.lang)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(langGet('en'))
    }, [])

    return (
        <>
            <RouteBuilder/>
        </>
    );
}

export default App;
