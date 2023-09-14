import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const Footer = () => {
    return <Box
        sx={{
            backgroundColor: "#5DADDC",
            py: 3,
            px: 2,
            mt: 'auto',
            position: "static"
        }}
        component="footer"
    >
        <Grid container
              direction="row"
              justifyContent="flex-end"
              alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant="h6" color="#fff" align="center">
                    Kontakt
                </Typography>
            </Grid>
            <Grid item style={{
                marginRight: "200px"
            }}>
                <Typography variant="h6" color="#fff" align="center">
                    Impressum
                </Typography>
            </Grid>
        </Grid>
    </Box>
}