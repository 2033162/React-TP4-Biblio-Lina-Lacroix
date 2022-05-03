import {useState} from 'react'

import './App.css';
import Header from "./components/Header";
import Clients from "./components/client/Clients";
import AddClient from "./components/client/AddClient";
import Documents from "./components/document/Documents";
import AddDocument from "./components/document/AddDocument";

function App() {

    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState(
        [
            {
                id: 1,
                nom: "John",
                prenom: "Smith",
                rue: "Daragon",
                ville: "Montreal",
                codePostal: "H05C42",
                numeroTelephone: "514-900-5698",
                dateInscription: "2022/02/20",
            },
            {
                id: 2,
                nom: "Marvin",
                prenom: "Stewart",
                rue: "LaSale",
                ville: "Montreal",
                codePostal: "H05C53",
                numeroTelephone: "514-900-7643",
                dateInscription: "2022/02/22",
            }
        ]
    )

    const addClient = (client) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newClient = {id, ...client}
        setClients([...clients, newClient])
    }

    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id))
    }

    const [showAddDocument, setShowAddDocument] = useState(false)
    const [documents, setDocuments] = useState(
        [
            {
                id: 1,
                etatDocument: "DISPONIBLE",
                genreDocument: "CD",
                titre: "harry potter",
                auteur: "JK. Rolling",
                editeur: "maison edition",
                anneePublication: "2000",
                nbrExemplaire: "3",
            },
            {
                id: 2,
                etatDocument: "ENDOMMAGE",
                genreDocument: "DVD",
                titre: "bobby bob",
                auteur: "lilo lee",
                editeur: "edition bop",
                anneePublication: "2018",
                nbrExemplaire: "5",
            },
            {
                id: 3,
                etatDocument: "EMPRUNTE",
                genreDocument: "livre",
                titre: "avengers",
                auteur: "Josh whedon",
                editeur: "marvel",
                anneePublication: "2020",
                nbrExemplaire: "2",
            }
        ]
    )

    const addDocument = (document) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newDocument = {id, ...document}
        setDocuments([...documents, newDocument])
    }

    const deleteDocument = (id) => {
        setDocuments(documents.filter((document) => document.id !== id))
    }

    return (
        <div className='container'>
            <h1>Bibliotheque de JavaTown</h1>
            <Header title='Client'
                    onAdd={() =>
                        setShowAddClient(!showAddClient)}
                    showAdd={showAddClient}/>
            {showAddClient && <AddClient onAdd={addClient} />}
            {clients.length > 0 ?
                <Clients clients={clients}
                         onDelete={deleteClient}/>
                : 'No Clients'}
            <Header title='Document'
                    onAdd={() =>
                        setShowAddDocument(!showAddDocument)}
                    showAdd={showAddDocument}/>
            {showAddDocument && <AddDocument onAdd={addDocument} />}
            {documents.length > 0 ?
                <Documents documents={documents}
                           onDelete={deleteDocument} />
                : 'No Documents'}
        </div>
    );
}

export default App;
