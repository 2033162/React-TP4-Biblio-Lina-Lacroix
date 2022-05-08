import Employe from "./Employe";

const Employes = ({employes, onDelete, onUpdate, showUpdate}) => {
    return (
        <>
            {employes.map((employe) => (
                <Employe key={employe.id}
                        employe={employe}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        showUpdate={showUpdate}/>
            ))}
        </>
    )
}

export default Employes