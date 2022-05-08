import { FaTimes } from 'react-icons/fa'

const Cd = ({cd, onDelete, onUpdate}) => {
    return (
        <div className="cd"
             onDoubleClick={() => onUpdate(cd.id)}>
            <h3>{cd.etatDocument} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(cd.id)}/>
            </h3>
            <p>{cd.genreMusique}</p>
        </div>
    )
}

export default Cd