
import React from "react";
import { Route, Routes as ListRoute, Outlet } from "react-router-dom";
import HomePage from "../../Pages/Home/Home";
import Resume from "../../Pages/CV/Cv";
import Navigation from "../Navigation/Navigation";

export default function AppRouter() {

    const WithNav = () => {
        return (
            <>
                <Navigation/>
                <Outlet/>
            </>
        )
    }

    return (
        <ListRoute>
            
            <Route element={<WithNav/>}>

                <Route exact path="/" element={<HomePage/>} />

            </Route>

            <Route exact path="/cv" element={<Resume/>} />

        </ListRoute>
    )

}