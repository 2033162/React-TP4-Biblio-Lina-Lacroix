import { FaTimes } from 'react-icons/fa'

const Dvd = ({dvd, onDelete, onToggle}) => {
    return (
        <div className="dvd"
             onDoubleClick={() => onToggle(dvd.id)}>
            <h3>{dvd.etatDocument} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(dvd.id)}/>
            </h3>
            <p>{dvd.genreFilm}</p>
        </div>
    )
}

export default Dvd