// Core
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Components
import CartRoute from "./routes/CartRoute";
import ProductRoute from "./routes/ProductRoute";
import AppHeader from "./components/AppHeader";
import MainRoute from "./routes/MainRoute";
import Filter from "./components/Filter";
import AppPagination from "./components/AppPagination";

// Style
import "./App.css";

export default function App() {
    return (
        <Router>
            <AppHeader/>
            <div className="app">
                <Switch>
                    <Route path="/favorites">
                        <Filter/>
                        <MainRoute/>
                        <AppPagination/>
                    </Route>
                    <Route path="/cart">
                        <CartRoute/>
                    </Route>
                    <Route path="/products/:productId">
                        <ProductRoute/>
                    </Route>
                    <Route path="*">
                        <Filter/>
                        <MainRoute/>
                        <AppPagination/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
