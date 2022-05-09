import Emprunt from "./Emprunt";

const Emprunts = ({emprunts}) => {
    return (
        <>
            {emprunts.map((emprunt) => (
                <Emprunt key={emprunt.id}
                        emprunt={emprunt}/>
            ))}
        </>
    )
}

export default Emprunts