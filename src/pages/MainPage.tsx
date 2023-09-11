import {Grid} from "@mui/material";
import {Header} from "../molecules/Header.tsx";
import {Router} from "../Router/Router.tsx";
import {Footer} from "../molecules/Footer.tsx";

export const MainPage = () => {
    return (
        <>
            <Grid
                container
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
                    <Router/>
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