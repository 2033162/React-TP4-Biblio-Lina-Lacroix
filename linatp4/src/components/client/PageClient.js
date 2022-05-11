import React, {useEffect, useState} from 'react';
import Clients from "./Clients";
import AddClient from "./AddClient";
import HeaderAdd from "../HeaderAdd";
import UpdateClient from "./UpdateClient";

const PageClient = () => {

    const [showAddClient, setShowAddClient] = useState(false)
    const [showUpdateClient, setShowUpdateClient] = useState(false)
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})

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
        await fetch(`http://localhost:8080/clients/${id}`, {
            method: 'DELETE'
        })
        setClients(clients.filter((client) => client.id !== id))
    }

    const updateClient = async (client) => {
        console.log(client)
        const res = await fetch(`http://localhost:8080/clients/${client.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(client)
        })
        const data = await res.json()
        setClients(
            clients.map(
                (cli) => cli.id === client.id ?
                    {...client,
                        nom: data.nom,
                        prenom: data.prenom,
                        rue: data.rue,
                        ville: data.ville,
                        codePostal: data.codePostal,
                        numeroTelephone: data.numeroTelephone,
                        dateInscription: data.dateInscription} : cli
            )
        )
    }

    return (
        <div className='container'>
            <HeaderAdd title='Client'
                       onAdd={() =>
                        setShowAddClient(!showAddClient)}
                       showAdd={showAddClient}/>
            {showAddClient && <AddClient onAdd={addClient} />}
            {clients.length > 0 ?
                <Clients clients={clients}
                         onDelete={deleteClient}
                         onUpdate={(client) => {
                             setShowUpdateClient(!showUpdateClient)
                             setClient(client)
                         }}
                         showUpdate={showUpdateClient}
                />
                : 'No Clients'}
            {showUpdateClient && <UpdateClient client={client} onUpdate={updateClient} />}
        </div>
    );
};

export default PageClient;