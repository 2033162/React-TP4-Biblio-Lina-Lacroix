import Client from './Client'
const Clients = ({clients, onDelete, onUpdate, showUpdate}) => {
    return (
        <>
            {clients.map((client) => (
                <Client key={client.id}
                        client={client}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        showUpdate={showUpdate}/>
            ))}
        </>
    )
}

export default Clients