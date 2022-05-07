import {useEffect, useState} from "react";
import Header2 from "../../Header2";
import AddLivre from "./AddLivre";
import Livres from "./Livres";

const PageLivre = () => {

    useEffect(() => {
        const getLivres = async () => {
            const livresFromServer = await fetchLivres()
            setLivres(livresFromServer)
        }
        getLivres()
    }, [])

    const fetchLivres = async () => {
        const res = await fetch('http://localhost:8080/documents/livres')
        const data = await res.json()
        return data
    }

    const [showAddLivre, setShowAddLivre] = useState(false)
    const [livres, setLivres] = useState([])

    const addLivre = async (livre) => {
        const res = await fetch('http://localhost:8080/documents/livres',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(livre)
            })
        const data = await res.json()
        setLivres([...livres, data])
    }

    const deleteLivre = async (id) => {
        await fetch(`http://localhost:8080/documents/livres/${id}`, {
            method: 'DELETE'
        })
        setLivres(livres.filter((livre) => livre.id !== id))
    }

    return (
        <div className='container'>
            <Header2 title='Document livre'
                     onAdd={() =>
                     setShowAddLivre(!showAddLivre)}
                     showAdd={setShowAddLivre}/>
            {showAddLivre && <AddLivre onAdd={addLivre} />}
            {livres.length > 0 ?
            <Livres livres={livres}
                onDelete={deleteLivre}/>
            : 'No Documents livres'}
        </div>
    );
}

export default PageLivre