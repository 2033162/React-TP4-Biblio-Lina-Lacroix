const Emprunt = ({emprunt}) => {
    return (
        <div className="emprunt">
            <h3>{emprunt.clientDto.prenom} {emprunt.clientDto.nom}</h3>
            <p>{emprunt.documentDto.genreDocument} {emprunt.documentDto.titre}</p>
        </div>
    )
}

export default Emprunt