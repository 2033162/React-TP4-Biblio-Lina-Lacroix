import React, {useEffect, useState} from 'react';
import Clients from "./Clients";
import AddClient from "./AddClient";
import Header2 from "../Header2";
import UpdateClient from "./UpdateClient";
import HeaderUpdate from "../HeaderUpdate";

const PageClient = () => {

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

    const fetchClient = async (id) => {
        const res = await fetch(`http://localhost:8080/clients/${id}`)
        const data = await res.json()
        return data
    }

    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([])

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

    const [showUpdateClient, setShowUpdateClient] = useState(false)

    const updateClient = async (id) => {
        const clientToUpdate = await fetchClient(id)
        const updateClient = await {...clientToUpdate,
            nom: !clientToUpdate.nom,
            prenom: !clientToUpdate.prenom,
            rue: !clientToUpdate.rue,
            ville: !clientToUpdate.ville,
            codePostal: !clientToUpdate.codePostal,
            numeroTelephone: !clientToUpdate.numeroTelephone,
            dateInscription: !clientToUpdate.dateInscription}

        const res = await fetch(`http://localhost:8080/clients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateClient)
        })
        const data = await res.json()
        setClients(
            clients.map(
                (client) => client.id === id ?
                    {...client,
                        nom: data.nom,
                        prenom: data.prenom,
                        rue: data.rue,
                        ville: data.ville,
                        codePostal: data.codePostal,
                        numeroTelephone: data.numeroTelephone,
                        dateInscription: data.dateInscription} : client
            )
        )
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
                         onDelete={deleteClient}
                         onUpdate={() =>
                             setShowUpdateClient(!showUpdateClient)}
                         showUpdateClient={showUpdateClient}
                         {showUpdateClient && <UpdateClient onUpdate={updateClient} />}
                />
                : 'No Clients'}
        </div>
    );
};

export default PageClient;