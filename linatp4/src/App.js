import './App.css';
import HeaderNavigation from "./components/HeaderNavigation";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import PageClient from "./components/client/PageClient";
import PageEmploye from "./components/employe/PageEmploye";
import PageLivre from "./components/document/livre/PageLivre";
import PageCd from "./components/document/cd/PageCd";
import PageDvd from "./components/document/dvd/PageDvd";
import UpdateClient from "./components/client/UpdateClient";

function App() {
    return (
        <div >
            <h1>Bibliotheque de JavaTown</h1>
            <HeaderNavigation/>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/clients" element={<PageClient/>} />
                <Route path="/clients/:id" element={<UpdateClient/>} />
                <Route path="/employes" element={<PageEmploye/>} />
                <Route path="/livres" element={<PageLivre/>} />
                <Route path="/cds" element={<PageCd/>} />
                <Route path="/dvds" element={<PageDvd/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
