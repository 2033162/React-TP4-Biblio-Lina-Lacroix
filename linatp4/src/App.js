import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Clients from "./components/client/Clients";
import AddClient from "./components/client/AddClient";
import Documents from "./components/document/Documents";
import AddDocument from "./components/document/AddDocument";

function App() {

    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([])
    const fetchClients = async () => {
        const res = await fetch('http://localhost:8080/clients')
        const data = await res.json()
        return data
    }
    const addClient = async (client) => {
        const res = await fetch('http://localhost:8080/clients',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(client)
            })
            const data = await res.json()
            setClients([...clients, data])
    }
    const deleteClient = async (id) => {
        await fetch(`http://localhost:8080/clients/${id}`,
            {
                method: 'DELETE'
            })
            setClients(clients.filter((client) => client.id !== id))
    }

    const [showAddDocument, setShowAddDocument] = useState(false)
    const [documents, setDocuments] = useState([])
    const fetchDocuments = async () => {
        const res = await fetch('http://localhost:8080/documents')
        const data = await res.json()
        return data
    }
    const addDocument = async (document) => {
        const res = await fetch('http://localhost:8080/documents',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(document)
            })
        const data = await res.json()
        setDocuments([...documents, data])
    }
    const deleteDocument = async (id) => {
        await fetch(`http://localhost:8080/documents/${id}`,
            {
                method: 'DELETE'
            })
            setDocuments(documents.filter((document) => document.id !== id))
    }

    useEffect(() => {
        const getClients = async () => {
            const clientsFromServer = await fetchClients()
            setClients(clientsFromServer)
        }
        const getDocuments = async () => {
            const documentsFromServer = await fetchDocuments()
            setDocuments(documentsFromServer)
        }
        getClients()
        getDocuments()
    }, [])

    return (
        <div className='container'>
            <Header title='Client'
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
            )} />
        </div>
    );
}

export default App;
