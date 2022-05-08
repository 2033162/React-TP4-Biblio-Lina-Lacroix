import {useEffect, useState} from "react";
import HeaderAdd from "../../HeaderAdd";
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
        const res = await fetch('http://localhost:8080/dvds')
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

    return (
        <div className='container'>
            <HeaderAdd title='Document dvd'
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