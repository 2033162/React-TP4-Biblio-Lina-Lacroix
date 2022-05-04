import React, {useState} from 'react';
import Clients from "./Clients";
import AddClient from "./AddClient";
import Header2 from "../Header2";

const PageClient = () => {

    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([])

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