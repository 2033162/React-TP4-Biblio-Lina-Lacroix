import {useEffect, useState} from "react";
import HeaderAdd from "../../HeaderAdd";
import AddDvd from "./AddDvd";
import Dvds from "./Dvds";
import UpdateDvd from "./UpdateDvd";

const PageDvd = () => {

    const [showAddDvd, setShowAddDvd] = useState(false)
    const [showUpdateDvd, setShowUpdateDvd] = useState(false)
    const [dvds, setDvds] = useState([])
    const [dvd, setDvd] = useState({})

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

    const updateDvd = async (dvd) => {
        console.log(dvd)
        const res = await fetch(`http://localhost:8080/dvds/${dvd.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dvd)
        })
        const data = await res.json()
        setDvds(
            dvds.map(
                (dvdDocument) => dvdDocument.id === dvd.id ?
                    {...dvd,
                        etatDocument: data.etatDocument,
                        genreDocument: data.genreDocument,
                        titre: data.titre,
                        auteur: data.auteur,
                        editeur: data.editeur,
                        anneePublication: data.anneePublication,
                        nbrExemplaire: data.nbrExemplaire,
                        duree: data.duree,
                        genreFilm: data.genreFilm} : dvdDocument
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
                onUpdate={(dvd) => {
                    setShowUpdateDvd(!showUpdateDvd)
                    setDvd(dvd)
                }}
                showUpdate={showUpdateDvd}
            />
            : 'No Documents dvds'}
            {showUpdateDvd && <UpdateDvd dvd={dvd} onUpdate={updateDvd} />}
        </div>
    );
}

export default PageDvd