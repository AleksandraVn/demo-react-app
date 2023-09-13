import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/MainPage.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import {getTheme} from "./getTheme.ts";

const muiTheme = createTheme({
    ...getTheme("light"),
});

function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
