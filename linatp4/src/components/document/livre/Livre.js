import { FaTimes } from 'react-icons/fa'

const Livre = ({livre, onDelete, onUpdate}) => {
    return (
        <div className="livre"
             onDoubleClick={() => onUpdate(livre.id)}>
            <h3>{livre.etatDocument} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(livre.id)}/>
            </h3>
            <p>{livre.genreLivre}</p>
        </div>
    )
}

export default Livre