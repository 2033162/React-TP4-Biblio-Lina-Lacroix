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

        /*const id = Math.floor(Math.random() * 10000) + 1
        const newClient = {id, ...client}
        setClients([...clients, newClient])*/
    }

    const deleteClient = async (id) => {
        await fetch(`http://localhost:8080/clients/${id}`, {
            method: 'DELETE'
        })
        setClients(clients.filter((client) => client.id !== id))

        //setClients(clients.filter((client) => client.id !== id))
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