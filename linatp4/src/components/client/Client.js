import { FaTimes} from 'react-icons/fa'

const Client = ({client, onDelete, onToggle}) => {
    return (
        <div className="client"
             onDoubleClick={() => onToggle(client.id)}>
            <h3>{client.nom} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(client.id)}/></h3>
            <p>{client.numeroTelephone}</p>
        </div>
    )
}

export default Client