import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../Components/Header/header";
import Main from "../Pages/HomePage";
import ProductsDetail from "../Pages/ProductsDetail";
import Footer from "../Components/Footer/footer";


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Header />
                    <Main />
                    <Footer />
                </Route>
                
                <Route exact path={"/add"}>
                    <Header />
                    <ProductsDetail />
                    <Footer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}