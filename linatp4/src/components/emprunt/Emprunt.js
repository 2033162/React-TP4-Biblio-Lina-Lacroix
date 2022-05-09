const Emprunt = ({emprunt}) => {
    return (
        <div className="emprunt">
            <h3>{emprunt.prenom} {emprunt.nom}</h3>
            <p>{emprunt.titre}</p>
        </div>
    )
}

export default Emprunt