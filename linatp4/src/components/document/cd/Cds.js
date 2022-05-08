import Cd from "./Cd";

const Cds = ({cds, onDelete, onUpdate, showUpdate}) => {
    return (
        <>
            {cds.map((cd) => (
                <Cd key={cd.id}
                    cd={cd}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    showUpdate={showUpdate}/>
            ))}
        </>
    )
}

export default Cds