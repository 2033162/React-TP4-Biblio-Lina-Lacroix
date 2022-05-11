import Emprunt from "./Emprunt";

const Emprunts = ({emprunts, onRetour}) => {
    return (
        <>
            {emprunts.map((emprunt) => (
                <Emprunt key={emprunt.id}
                         emprunt={emprunt}
                         onRetour={onRetour}
                />
            ))}
        </>
    )
}

export default Emprunts