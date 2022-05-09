const Emprunt = ({emprunt}) => {
    return (
        <div className="emprunt">
            <h3>{emprunt.dateInitial}</h3>
            <h3>{emprunt.dateExpire}</h3>

        </div>
    )
}