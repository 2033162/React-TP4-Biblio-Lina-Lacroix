import {AiOutlineRollback} from 'react-icons/ai'

const Emprunt = ({emprunt, onRetour}) => {
    return (
        <div className="emprunt">
            <h3>{emprunt.clientDto.prenom} {emprunt.clientDto.nom}
                <AiOutlineRollback
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={() => onRetour(emprunt)}/>
            </h3>
            <p>{emprunt.documentDto.genreDocument} {emprunt.documentDto.titre}</p>
        </div>
    )
}

export default Emprunt