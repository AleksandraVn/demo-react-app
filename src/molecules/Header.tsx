import React from "react";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    return (
        <AppBar
            position={"static"}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"Buchung"}
                        </Button>
                        <Button
                            key={"Blog"}
                            onClick={() => console.log("Blog")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"Blog"}
                        </Button>
                        <Button
                            key={"Quiz"}
                            onClick={() => console.log("Quiz")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"Quiz"}
                        </Button>
                        <Button
                            key={"Unsere Ziele"}
                            onClick={() => console.log("Unsere Ziele")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"Unsere Ziele"}
                        </Button>
                        <Button
                            key={"Partner"}
                            onClick={() => console.log("Partner")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"Partner"}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}