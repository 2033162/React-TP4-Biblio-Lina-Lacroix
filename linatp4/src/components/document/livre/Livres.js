import Livre from "./Livre";

const Livres = ({livres, onDelete, onToggle}) => {
    return (
        <>
            {livres.map((livre) => (
                <Livre key={livre.id}
                        livre={livre}
                        onDelete={onDelete}
                        onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Livres