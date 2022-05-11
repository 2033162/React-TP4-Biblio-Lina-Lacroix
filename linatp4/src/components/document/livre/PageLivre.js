import {useEffect, useState} from "react";
import Header2 from "../../HeaderAdd";
import AddLivre from "./AddLivre";
import Livres from "./Livres";
import UpdateLivre from "./UpdateLivre";

const PageLivre = () => {

    const [showAddLivre, setShowAddLivre] = useState(false)
    const [showUpdateLivre, setShowUpdateLivre] = useState(false)
    const [livres, setLivres] = useState([])
    const [livre, setLivre] = useState({})

    useEffect(() => {
        const getLivres = async () => {
            const livresFromServer = await fetchLivres()
            setLivres(livresFromServer)
        }
        getLivres()
    }, [])

    const fetchLivres = async () => {
        const res = await fetch('http://localhost:8080/livres')
        const data = await res.json()
        return data
    }

    const fetchLivre = async (id) => {
        const res = await fetch(`http://localhost:8080/livres/${id}`)
        const data = await res.json()
        return data
    }

    const addLivre = async (livre) => {
        const res = await fetch('http://localhost:8080/livres',
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
        await fetch(`http://localhost:8080/livres/${id}`, {
            method: 'DELETE'
        })
        setLivres(livres.filter((livre) => livre.id !== id))
    }

    const updateLivre = async (livre) => {
        console.log(livre)
        const res = await fetch(`http://localhost:8080/livres/${livre.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(livre)
        })
        const data = await res.json()
        setLivres(
            livres.map(
                (livreDocument) => livreDocument.id === livre.id ?
                    {...livre,
                        etatDocument: data.etatDocument,
                        genreDocument: data.genreDocument,
                        titre: data.titre,
                        auteur: data.auteur,
                        editeur: data.editeur,
                        anneePublication: data.anneePublication,
                        nbrExemplaire: data.nbrExemplaire,
                        nbrPages: data.nbrPages,
                        genreLivre: data.genreLivre} : livreDocument
            )
        )
    }

    return (
        <div className='container'>
            <Header2 title='Document livre'
                     onAdd={() =>
                     setShowAddLivre(!showAddLivre)}
                     showAdd={showAddLivre}/>
            {showAddLivre && <AddLivre onAdd={addLivre} />}
            {livres.length > 0 ?
            <Livres livres={livres}
                onDelete={deleteLivre}
                onUpdate={(livre) => {
                    setShowUpdateLivre(!showUpdateLivre)
                    setLivre(livre)
                }}
                showUpdate={showUpdateLivre}
            />
            : 'No Documents livres'}
            {showUpdateLivre && <UpdateLivre livre={livre} onUpdate={updateLivre} />}
        </div>
    );
}

export default PageLivre