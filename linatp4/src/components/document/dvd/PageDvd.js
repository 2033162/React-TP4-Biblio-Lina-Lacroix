import {useEffect, useState} from "react";
import HeaderAdd from "../../HeaderAdd";
import AddDvd from "./AddDvd";
import Dvds from "./Dvds";
import UpdateDvd from "./UpdateDvd";

const PageDvd = () => {

    useEffect(() => {
        const getDvds = async () => {
            const dvdsFromServer = await fetchDvds()
            setDvds(dvdsFromServer)
        }
        getDvds()
    }, [])

    const fetchDvds = async () => {
        const res = await fetch('http://localhost:8080/dvds')
        const data = await res.json()
        return data
    }

    const fetchDvd = async (id) => {
        const res = await fetch(`http://localhost:8080/dvds/${id}`)
        const data = await res.json()
        return data
    }

    const [showAddDvd, setShowAddDvd] = useState(false)
    const [dvds, setDvds] = useState([])

    const addDvd = async (dvd) => {
        const res = await fetch('http://localhost:8080/dvds',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(dvd)
            })
        const data = await res.json()
        setDvds([...dvds, data])
    }

    const deleteDvd = async (id) => {
        await fetch(`http://localhost:8080/dvds/${id}`, {
            method: 'DELETE'
        })
        setDvds(dvds.filter((dvd) => dvd.id !== id))
    }

    const [showUpdateDvd, setShowUpdateDvd] = useState(false)

    const updateDvd = async (id) => {
        const dvdToUpdate = await fetchDvd(id)
        const updateDvd = await {...dvdToUpdate,
            etatDocument: !dvdToUpdate.etatDocument,
            genreDocument: !dvdToUpdate.genreDocument,
            titre: !dvdToUpdate.titre,
            auteur: !dvdToUpdate.auteur,
            editeur: !dvdToUpdate.editeur,
            anneePublication: !dvdToUpdate.anneePublication,
            nbrExemplaire: !dvdToUpdate.nbrExemplaire,
            duree: !dvdToUpdate.duree,
            genreFilm: !dvdToUpdate.genreFilm
        }

        const res = await fetch(`http://localhost:8080/dvds/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateDvd)
        })
        const data = await res.json()
        setDvds(
            dvds.map(
                (dvd) => dvd.id === id ?
                    {...dvd,
                        etatDocument: data.etatDocument,
                        genreDocument: data.genreDocument,
                        titre: data.titre,
                        auteur: data.auteur,
                        editeur: data.editeur,
                        anneePublication: data.anneePublication,
                        nbrExemplaire: data.nbrExemplaire,
                        duree: data.duree,
                        genreFilm: data.genreFilm
                    } : dvd
            )
        )
    }

    return (
        <div className='container'>
            <HeaderAdd title='Document dvd'
                       onAdd={() =>
                     setShowAddDvd(!showAddDvd)}
                       showAdd={showAddDvd}/>
            {showAddDvd && <AddDvd onAdd={addDvd} />}
            {dvds.length > 0 ?
            <Dvds dvds={dvds}
                onDelete={deleteDvd}
                onUpdate={() =>
                    setShowUpdateDvd(!showUpdateDvd)}
                showUpdate={showUpdateDvd}
            />
            : 'No Documents dvds'}
            {showUpdateDvd && <UpdateDvd onUpdate={updateDvd} />}
        </div>
    );
}

export default PageDvd