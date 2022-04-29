import { FaTimes} from 'react-icons/fa'

const Document = ({document, onDelete, onToggle}) => {
    return (
        <div className="document"
             onDoubleClick={() => onToggle(document.id)}>
            <h3>{document.titre} <FaTimes
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(document.id)}/></h3>
            <p>{document.genreDocument}</p>
        </div>
    )
}

export default Document