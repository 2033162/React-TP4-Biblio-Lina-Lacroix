import {useEffect, useState} from "react";
import Header2 from "../../HeaderAdd";
import AddLivre from "./AddLivre";
import Livres from "./Livres";
import UpdateLivre from "./UpdateLivre";

const PageLivre = () => {

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

    const [showAddLivre, setShowAddLivre] = useState(false)
    const [livres, setLivres] = useState([])

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

    const [showUpdateLivre, setShowUpdateLivre] = useState(false)

    const updateLivre = async (id) => {
        const livreToUpdate = await fetchLivre(id)
        const updateLivre = await {...livreToUpdate,
            etatDocument: !livreToUpdate.etatDocument,
            genreDocument: !livreToUpdate.genreDocument,
            titre: !livreToUpdate.titre,
            auteur: !livreToUpdate.auteur,
            editeur: !livreToUpdate.editeur,
            anneePublication: !livreToUpdate.anneePublication,
            nbrExemplaire: !livreToUpdate.nbrExemplaire,
            nbrPages: !livreToUpdate.nbrPages,
            genreLivre: !livreToUpdate.genreLivre
        }

        const res = await fetch(`http://localhost:8080/livres/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateLivre)
        })
        const data = await res.json()
        setLivres(
            livres.map(
                (livre) => livre.id === id ?
                    {...livre,
                        etatDocument: data.etatDocument,
                        genreDocument: data.genreDocument,
                        titre: data.titre,
                        auteur: data.auteur,
                        editeur: data.editeur,
                        anneePublication: data.anneePublication,
                        nbrExemplaire: data.nbrExemplaire,
                        nbrPages: data.nbrPages,
                        genreLivre: data.genreLivre
                    } : livre
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
                onUpdate={() =>
                    setShowUpdateLivre(!showUpdateLivre)}
                showUpdate={showUpdateLivre}
            />
            : 'No Documents livres'}
            {showUpdateLivre && <UpdateLivre onUpdate={updateLivre} />}
        </div>
    );
}

export default PageLivre