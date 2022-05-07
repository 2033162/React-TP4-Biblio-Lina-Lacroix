import { FaTimes } from 'react-icons/fa'

const Livre = ({livre, onDelete, onToggle}) => {
    return (
        <div className="Livre"
             onDoubleClick={() => onToggle(livre.id)}>
            <h3>{livre.genreLivre} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(livre.id)}/>
            </h3>
            <p>{livre.nbrPages}</p>
        </div>
    )
}

export default Livre