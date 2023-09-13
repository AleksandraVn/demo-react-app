import React from "react";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import {useNavigateToStartPage} from "../pages/StartPage/StartPage.navigate.generated.tsx";
import {useNavigateToBlogPage} from "../pages/BlogPage/BlogPage.navigate.generated.tsx";
import {ImageView} from "../atoms/ImageView.tsx";

export const Header = () => {

    const showHome = useNavigateToStartPage();
    const showBlog = useNavigateToBlogPage();

    return (
        <AppBar
            position={"sticky"}
            color={"transparent"}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        onClick={showHome}
                    >
                        <ImageView
                            height={"100px"}
                            width={"150px"}
                            image={"Logo.png"}
                        />
                    </Button>
                    <Box alignItems={"space-evenly"} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={"Buchung"}
                            onClick={() => console.log("Buchung")}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {"Buchung"}
                        </Button>
                        <Button
                            key={"Blog"}
                            onClick={showBlog}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {"Blog"}
                        </Button>
                        <Button
                            key={"Quiz"}
                            onClick={() => console.log("Quiz")}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {"Quiz"}
                        </Button>
                        <Button
                            key={"Unsere Ziele"}
                            onClick={() => console.log("Unsere Ziele")}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {"Unsere Ziele"}
                        </Button>
                        <Button
                            key={"Partner"}
                            onClick={() => console.log("Partner")}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {"Partner"}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}