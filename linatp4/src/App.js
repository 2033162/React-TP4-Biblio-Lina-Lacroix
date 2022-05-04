import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import PageClient from "./components/client/PageClient";
import PageDocument from "./components/document/PageDocument";

function App() {

    /*const [clients, setClients] = useState([])

    useEffect(() => {
        const getClients = async () => {
            const clientsFromServer = await fetchClients()
            setClients(clientsFromServer)
        }
        getClients()
    }, [])

    const fetchClients = async () => {
        const res = await fetch('http://localhost:8080/clients')
        const data = await res.json()
        return data
    }*/

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
