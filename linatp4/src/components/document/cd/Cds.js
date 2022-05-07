import Cd from "./Cd";

const Cds = ({cds, onDelete, onToggle}) => {
    return (
        <>
            {cds.map((cd) => (
                <Cd key={cd.id}
                    cd={cd}
                    onDelete={onDelete}
                    onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Cds