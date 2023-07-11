
import React from "react";
import { Route, Routes as ListRoute } from "react-router-dom";

export default function AppRouter() {

    return (
        <ListRoute>
            <Route exact path="/" element={<p>Main</p>}/>
            <Route exact path="/cv" element={<p>CV</p>}/>
        </ListRoute>
    )

}