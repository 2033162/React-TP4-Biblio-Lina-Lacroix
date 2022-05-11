import {useEffect, useState} from "react";
import HeaderAdd from "../../HeaderAdd";
import AddCd from "./AddCd";
import Cds from "./Cds";
import UpdateCd from "./UpdateCd";

const PageCd = () => {

    const [showAddCd, setShowAddCd] = useState(false)
    const [showUpdateCd, setShowUpdateCd] = useState(false)
    const [cds, setCds] = useState([])
    const [cd, setCd] = useState({})

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

    const updateCd = async (cd) => {
        console.log(cd)
        const res = await fetch(`http://localhost:8080/cds/${cd.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(cd)
        })
        const data = await res.json()
        setCds(
            cds.map(
                (cdDocument) => cdDocument.id === cd.id ?
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
                        interprete: data.interprete} : cdDocument
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
                onUpdate={(cd) => {
                    setShowUpdateCd(!showUpdateCd)
                    setCd(cd)
                }}
                showUpdate={showUpdateCd}
            />
            : 'No Documents cds'}
            {showUpdateCd && <UpdateCd cd={cd} onUpdate={updateCd} />}
        </div>
    );
}

export default PageCd