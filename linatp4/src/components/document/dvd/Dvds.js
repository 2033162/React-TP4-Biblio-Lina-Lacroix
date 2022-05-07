import Dvd from "./Dvd";

const Dvds = ({dvds, onDelete, onToggle}) => {
    return (
        <>
            {dvds.map((dvd) => (
                <Dvd key={dvd.id}
                    dvd={dvd}
                    onDelete={onDelete}
                    onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Dvds