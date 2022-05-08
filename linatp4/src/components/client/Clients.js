import Client from './Client'
const Clients = ({clients, onDelete, onUpdate}) => {
    return (
        <>
            {clients.map((client) => (
                <Client key={client.id}
                        client={client}
                        onDelete={onDelete}
                        onUpdate={onUpdate}/>
            ))}
        </>
    )
}

export default Clients