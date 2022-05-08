import Livre from "./Livre";

const Livres = ({livres, onDelete, onUpdate, showUpdate}) => {
    return (
        <>
            {livres.map((livre) => (
                <Livre key={livre.id}
                        livre={livre}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        showUpdate={showUpdate}/>
            ))}
        </>
    )
}

export default Livres