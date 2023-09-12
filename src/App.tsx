import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/MainPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    )
}

export default App
