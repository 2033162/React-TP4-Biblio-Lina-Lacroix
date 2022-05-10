import {useEffect, useState} from "react";
import HeaderAdd from "../HeaderAdd";
import AddEmprunt from "./AddEmprunt";
import Emprunts from "./Emprunts";

const PageEmprunt = () => {

    useEffect(() => {
        const getEmprunts = async () => {
            const empruntsFromServer = await fetchEmprunts()
            setEmprunts(empruntsFromServer)
        }
        getEmprunts()
    }, [])

    const fetchEmprunts = async () => {
        const res = await fetch('http://localhost:8080/empruntDocuments')
        const data = await res.json()
        return data
    }

    const [showAddEmprunt, setShowAddEmprunt] = useState(false)
    const [emprunts, setEmprunts] = useState([])

    const addEmprunt = async (emprunt) => {
        const res = await fetch('http://localhost:8080/empruntDocuments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(emprunt)
        })
        const data = await res.json()
        setEmprunts([...emprunts, data])
    }

    return (
        <div className='container'>
            <HeaderAdd title='Emprunt'
                       onAdd={() =>
                        setShowAddEmprunt(!showAddEmprunt)}
                       showAdd={showAddEmprunt}/>
            {showAddEmprunt && <AddEmprunt onAdd={addEmprunt} />}
            {emprunts.length > 0 ?
                <Emprunts emprunts={emprunts}/>
            : 'No Emprunts'}
        </div>
    )
}

export default PageEmprunt