import React from "react";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import {useNavigateToStartPage} from "../pages/StartPage/StartPage.navigate.generated.tsx";
import {useNavigateToBlogPage} from "../pages/BlogPage/BlogPage.navigate.generated.tsx";
import {ImageView} from "../atoms/ImageView.tsx";
import {HeaderButton} from "../atoms/HeaderButton.tsx";

export const Header = () => {

    const showHome = useNavigateToStartPage();
    const showBlog = useNavigateToBlogPage();

    return (
        <AppBar
            position={"sticky"}
            style={{
                backgroundColor: "whitesmoke"
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ maxHeight: "70px"}}>
                    <Button
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "5%",
                        }}
                        onClick={showHome}
                    >
                        <ImageView
                            height={"120px"}
                            width={"180px"}
                            image={"logo.png"}
                        />
                    </Button>
                    <Box paddingX={"100px"} marginLeft={"250px"} sx={{
                        flexDirection: "row",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        display: { xs: 'none', md: 'flex' }
                    }}>
                        <HeaderButton title={"Buchung"}/>
                        <HeaderButton title={"Blog"} onClick={showBlog}/>
                        <HeaderButton title={"Quiz"}/>
                        <HeaderButton title={"Unsere Ziele"}/>
                        <HeaderButton title={"Partner"}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}