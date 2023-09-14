import {Header} from "../molecules/Header.tsx";
import {Footer} from "../molecules/Footer.tsx";
import {RouterRegistry} from "../Router/Registry/RouterRegistry.generated.ts";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {NavigateToStartPage} from "./StartPage/StartPage.navigate.generated.tsx";
import "../Router/Registry";
import {Container} from "@mui/material";

export const MainPage = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Header/>
            <div style={{margin: 20, padding: 40}}>
                <Routes>
                    {RouterRegistry.getAll()}
                    <Route path="/" element={<NavigateToStartPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </Container>
    );
}