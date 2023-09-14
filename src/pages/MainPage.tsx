import {Header} from "../molecules/Header.tsx";
import {Footer} from "../molecules/Footer.tsx";
import {RouterRegistry} from "../Router/Registry/RouterRegistry.generated.ts";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {NavigateToStartPage} from "./StartPage/StartPage.navigate.generated.tsx";
import "../Router/Registry";

export const MainPage = () => {
    return (
        <div style={{ display: "flex", flexFlow: "column", height: "100vh"}}>
            <div style={{flex: "0 1 auto"}}>
                <Header/>
            </div>
            <div style={{flex: "1 1 auto"}}>
                <Routes>
                    {RouterRegistry.getAll()}
                    <Route path="/" element={<NavigateToStartPage/>}/>
                </Routes>
            </div>
            <div style={{flex: "0 1 auto"}}>
                <Footer/>
            </div>
        </div>
    );
}