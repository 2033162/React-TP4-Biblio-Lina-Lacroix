import React, {useState} from 'react';
import Clients from "./Clients";
import AddClient from "./AddClient";
import Header2 from "../Header2";

const PageClient = () => {

    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([{
        id: 1,
        nom: "Smith",
        prenom: "John",
        rue: "5417 Daragon",
        ville: "Montreal",
        codePostal: "H05C42",
        numeroTelephone: "514-900-5698",
        dateInscription: "2022/02/20",
    },
        {
            id: 2,
            nom: "Stewart",
            prenom: "Marvin",
            rue: "7251 LaSale",
            ville: "Montreal",
            codePostal: "H05C53",
            numeroTelephone: "514-900-7643",
            dateInscription: "2022/02/22",
        }])

    const addClient = (client) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newClient = {id, ...client}
        setClients([...clients, newClient])
    }

    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id))
    }

    return (
        <div className='container'>
            <Header2 title='Client'
                    onAdd={() =>
                        setShowAddClient(!showAddClient)}
                    showAdd={showAddClient}/>
            {showAddClient && <AddClient onAdd={addClient} />}
            {clients.length > 0 ?
                <Clients clients={clients}
                         onDelete={deleteClient}/>
                : 'No Clients'}
        </div>
    );
};

export default PageClient;