import { FaTimes} from 'react-icons/fa'

const Client = ({client, onDelete, onUpdate}) => {
    return (
        <div className="client"
             onDoubleClick={() => onUpdate(client)}>
            <h3>{client.prenom} {client.nom} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(client.id)}/></h3>
            <p>{client.numeroTelephone}</p>
        </div>
    )
}

export default Client