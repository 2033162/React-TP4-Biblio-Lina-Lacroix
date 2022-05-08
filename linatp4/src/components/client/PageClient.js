import React, {useEffect, useState} from 'react';
import Clients from "./Clients";
import AddClient from "./AddClient";
import Header2 from "../Header2";

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

    const toggleClient = async (id) => {
        const clientToToggle = await fetchClient(id)
        const updateClient = await {...clientToToggle,
            nom: !clientToToggle.nom,
            prenom: !clientToToggle.prenom,
            rue: !clientToToggle.rue,
            ville: !clientToToggle.ville,
            codePostal: !clientToToggle.codePostal,
            numeroTelephone: !clientToToggle.numeroTelephone,
            dateInscription: !clientToToggle.dateInscription}

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
                         onToggle={toggleClient}/>
                : 'No Clients'}
        </div>
    );
};

export default PageClient;