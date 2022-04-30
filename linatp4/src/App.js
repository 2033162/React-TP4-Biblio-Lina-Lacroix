import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Clients from "./components/client/Clients";
import AddClient from "./components/client/AddClient";
import Documents from "./components/document/Documents";
import AddDocument from "./components/document/AddDocument";

function App() {
    const [clients, setClients] = useState([])
    const [documents, setDocuments] = useState([])

    return (
        <Router>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Header title={'Bibliotheque'}/>}/>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/documents" element={<Documents/>}/>
                </Routes>
            </div>
        </Router>
    );
                    /*<Header title='Client'
                            onAdd={() =>
                                setShowAddClient(!showAddClient)}
                            showAdd={showAddClient}/>
                    <Route path='/' exact render={(props) => (
                        <>
                            {showAddClient && <AddClient onAdd={addClient} />}
                            {clients.length > 0 ?
                                <Clients clients={clients}
                                         onDelete={deleteClient}/>
                                : 'No Clients'}
                        </>
                    )} />
                    <Header title='Document'
                            onAdd={() =>
                                setShowAddDocument(!showAddDocument)}
                            showAdd={showAddDocument}/>
                    <Route path='/' exact render={(props) => (
                        <>
                            {showAddDocument && <AddDocument onAdd={addDocument} />}
                            {documents.length > 0 ?
                                <Documents documents={documents}
                                           onDelete={deleteDocument} />
                                : 'No Documents'}
                        </>
                    )} />*/
}

export default App;
