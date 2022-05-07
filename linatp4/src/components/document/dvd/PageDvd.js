import {useEffect, useState} from "react";
import Header2 from "../../Header2";
import AddDvd from "./AddDvd";
import Dvds from "./Dvds";

const PageDvd = () => {

    useEffect(() => {
        const getDvds = async () => {
            const dvdsFromServer = await fetchDvds()
            setDvds(dvdsFromServer)
        }
        getDvds()
    }, [])

    const fetchDvds = async () => {
        const res = await fetch('http://localhost:8080/documents/dvds')
        const data = await res.json()
        return data
    }

    const [showAddDvd, setShowAddDvd] = useState(false)
    const [dvds, setDvds] = useState([])

    const addDvd = async (dvd) => {
        const res = await fetch('http://localhost:8080/documents/dvds',
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
        await fetch(`http://localhost:8080/documents/dvds/${id}`, {
            method: 'DELETE'
        })
        setDvds(dvds.filter((dvd) => dvd.id !== id))
    }

    return (
        <div className='container'>
            <Header2 title='Document dvd'
                     onAdd={() =>
                     setShowAddDvd(!showAddDvd)}
                     showAdd={showAddDvd}/>
            {showAddDvd && <AddDvd onAdd={addDvd} />}
            {dvds.length > 0 ?
            <Dvds dvds={dvds}
                onDelete={deleteDvd}/>
            : 'No Documents dvds'}
        </div>
    );
}

export default PageDvd