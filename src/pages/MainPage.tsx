import {Grid} from "@mui/material";
import {Header} from "../molecules/Header.tsx";
import {Footer} from "../molecules/Footer.tsx";
import {RouterRegistry} from "../Router/Registry/RouterRegistry.generated.ts";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {NavigateToStartPage} from "./StartPage/StartPage.navigate.generated.tsx";
import "../Router/Registry";

export const MainPage = () => {
    return (
        <>
            <Grid
                container
                data-testid={"container"}
                direction={"column"}
                flexDirection={"column"}
                minWidth={"100%"}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Header/>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <div style={{ margin: 20, padding: 40 }}>
                        <Routes>
                            {RouterRegistry.getAll()}
                            <Route path="/" element={<NavigateToStartPage/>}/>
                        </Routes>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Footer/>
                </Grid>
            </Grid>
        </>
    );
}