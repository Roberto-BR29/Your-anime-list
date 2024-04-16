import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import AnimeDetailPage from "./pages/AnimeDetailPage";

function RoutesApp(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/anime/:id" element={<AnimeDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;