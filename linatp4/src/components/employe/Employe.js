import { FaTimes} from 'react-icons/fa'

const Employe = ({employe, onDelete, onUpdate}) => {
    return (
        <div className="employe"
             onDoubleClick={() => onUpdate(employe)}>
            <h3>{employe.prenom} {employe.nom} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(employe.id)}/></h3>
            <p>{employe.fonction}</p>
        </div>
    )
}

export default Employe