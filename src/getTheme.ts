import {PaletteMode, ThemeOptions} from "@mui/material";

export const getTheme = (mode: PaletteMode = "light"): ThemeOptions => {
    const palette = {
        mode: mode,
        primary: {
            light: "#B3E5FC",
            main: "#03A9F4",
            dark: "#0288D1",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ffffff",
            dark: "rgba(0,0,0,0)"
        }
    };

    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 900,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
        palette: palette,
        typography: {
            body1: {
                fontSize: "1rem",
                "@media (max-width:600px)": {
                    fontSize: ".6rem",
                },
            },
            body2: {
                fontSize: ".8rem",
                "@media (max-width:600px)": {
                    fontSize: ".6rem",
                },
            },
            h1: {
                fontSize: "2.0rem",
                "@media (max-width:600px)": {
                    fontSize: "1.6rem",
                },
            },
            h2: {
                fontSize: "1.8rem",
                "@media (max-width:600px)": {
                    fontSize: "1.5rem",
                },
            },
            h3: {
                fontSize: "1.6rem",
                "@media (max-width:600px)": {
                    fontSize: "1.4rem",
                },
            },
            h4: {
                fontSize: "1.4rem",
                "@media (max-width:600px)": {
                    fontSize: "1.3rem",
                },
            },
            h5: {
                fontSize: "1.2rem",
                "@media (max-width:600px)": {
                    fontSize: "1.2rem",
                },
            },
            h6: {
                fontSize: "1.1rem",
                "@media (max-width:600px)": {
                    fontSize: "1.1rem",
                },
            },
        },

    }
}