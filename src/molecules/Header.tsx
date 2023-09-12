import React from "react";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {useNavigateToStartPage} from "../pages/StartPage/StartPage.navigate.generated.tsx";
import {useNavigateToBlogPage} from "../pages/BlogPage/BlogPage.navigate.generated.tsx";

export const Header = () => {

    const showHome = useNavigateToStartPage();
    const showBlog = useNavigateToBlogPage();

    return (
        <AppBar
            position={"static"}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={showHome}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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