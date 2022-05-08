import {useEffect, useState} from "react";
import HeaderAdd from "../../HeaderAdd";
import AddCd from "./AddCd";
import Cds from "./Cds";
import UpdateCd from "./UpdateCd";

const PageCd = () => {

    useEffect(() => {
        const getCds = async () => {
            const cdsFromServer = await fetchCds()
            setCds(cdsFromServer)
        }
        getCds()
    }, [])

    const fetchCds = async () => {
        const res = await fetch('http://localhost:8080/cds')
        const data = await res.json()
        return data
    }

    const fetchCd = async (id) => {
        const res = await fetch(`http://localhost:8080/cds/${id}`)
        const data = await res.json()
        return data
    }

    const [showAddCd, setShowAddCd] = useState(false)
    const [cds, setCds] = useState([])

    const addCd = async (cd) => {
        const res = await fetch('http://localhost:8080/cds',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(cd)
            })
        const data = await res.json()
        setCds([...cds, data])
    }

    const deleteCd = async (id) => {
        await fetch(`http://localhost:8080/cds/${id}`, {
            method: 'DELETE'
        })
        setCds(cds.filter((cd) => cd.id !== id))
    }

    const [showUpdateCd, setShowUpdateCd] = useState(false)

    const updateCd = async (id) => {
        const cdToUpdate = await fetchCd(id)
        const updateCd = await {...cdToUpdate,
            etatDocument: !cdToUpdate.etatDocument,
            genreDocument: !cdToUpdate.genreDocument,
            titre: !cdToUpdate.titre,
            auteur: !cdToUpdate.auteur,
            editeur: !cdToUpdate.editeur,
            anneePublication: !cdToUpdate.anneePublication,
            nbrExemplaire: !cdToUpdate.nbrExemplaire,
            genreMusique: !cdToUpdate.genreMusique,
            compositeur: !cdToUpdate.compositeur,
            interprete: !cdToUpdate.interprete
        }

        const res = await fetch(`http://localhost:8080/cds/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateCd)
        })
        const data = await res.json()
        setCds(
            cds.map(
                (cd) => cd.id === id ?
                    {...cd,
                        etatDocument: data.etatDocument,
                        genreDocument: data.genreDocument,
                        titre: data.titre,
                        auteur: data.auteur,
                        editeur: data.editeur,
                        anneePublication: data.anneePublication,
                        nbrExemplaire: data.nbrExemplaire,
                        genreMusique: data.genreMusique,
                        compositeur: data.compositeur,
                        interprete: data.interprete
                    } : cd
            )
        )
    }

    return (
        <div className='container'>
            <HeaderAdd title='Document cd'
                       onAdd={() =>
                     setShowAddCd(!showAddCd)}
                       showAdd={showAddCd}/>
            {showAddCd && <AddCd onAdd={addCd} />}
            {cds.length > 0 ?
            <Cds cds={cds}
                onDelete={deleteCd}
                onUpdate={() =>
                    setShowUpdateCd(!showUpdateCd)}
                showUpdate={showUpdateCd}/>
            : 'No Documents cds'}
            {showUpdateCd && <UpdateCd onUpdate={updateCd} />}
        </div>
    );
}

export default PageCd