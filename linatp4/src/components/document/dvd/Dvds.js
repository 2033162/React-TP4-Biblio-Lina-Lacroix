import Dvd from "./Dvd";

const Dvds = ({dvds, onDelete, onUpdate, showUpdate}) => {
    return (
        <>
            {dvds.map((dvd) => (
                <Dvd key={dvd.id}
                    dvd={dvd}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    showUpdate={showUpdate}/>
            ))}
        </>
    )
}

export default Dvds