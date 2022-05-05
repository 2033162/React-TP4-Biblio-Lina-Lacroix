import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import PageClient from "./components/client/PageClient";
import PageDocument from "./components/document/PageDocument";

function App() {
    return (
        <div >
            <h1>Bibliotheque de JavaTown</h1>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/clients" element={<PageClient/>} />
                <Route path="/documents" element={<PageDocument/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
