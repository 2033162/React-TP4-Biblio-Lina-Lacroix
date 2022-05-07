import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import PageClient from "./components/client/PageClient";
import PageLivre from "./components/document/livre/PageLivre";
import PageCd from "./components/document/cd/PageCd";
import PageDvd from "./components/document/dvd/PageDvd";

function App() {
    return (
        <div >
            <h1>Bibliotheque de JavaTown</h1>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/clients" element={<PageClient/>} />
                <Route path="/documents/livres" element={<PageLivre/>} />
                <Route path="/documents/cds" element={<PageCd/>} />
                <Route path="/documents/dvds" element={<PageDvd/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
