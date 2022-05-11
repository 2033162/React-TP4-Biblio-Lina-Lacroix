import {useEffect, useState} from "react";
import HeaderAdd from "../HeaderAdd";
import Employes from "./Employes";
import AddEmploye from "./AddEmploye";
import UpdateEmploye from "./UpdateEmploye";

const PageEmploye = () => {

    const [showAddEmploye, setShowAddEmploye] = useState(false)
    const [showUpdateEmploye, setShowUpdateEmploye] = useState(false)
    const [employes, setEmployes] = useState([])
    const [employe, setEmploye] = useState({})

    useEffect(() => {
        const getEmployes = async () => {
            const employesFromServer = await fetchEmployes()
            setEmployes(employesFromServer)
        }
        getEmployes()
    }, [])

    const fetchEmployes = async () => {
        const res = await fetch('http://localhost:8080/employes')
        const data = await res.json()
        return data
    }

    const addEmploye = async (employe) => {
        const res = await fetch('http://localhost:8080/employes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employe)
        })
        const data = await res.json()
        setEmployes([...employes, data])
    }

    const deleteEmploye = async (id) => {
        await fetch(`http://localhost:8080/employes/${id}`, {
            method: 'DELETE'
        })
        setEmployes(employes.filter((employe) => employe.id !== id))
    }

    const updateEmploye = async (employe) => {
        console.log(employe)
        const res = await fetch(`http://localhost:8080/employes/${employe.id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(employe)
        })
        const data = await res.json()
        setEmployes(
            employes.map(
                (empl) => empl.id === employe.id ?
                    {...employe,
                    nom: data.nom,
                    prenom: data.prenom,
                    fonction: data.fonction} : empl
            )
        )
    }

    return (
        <div className='container'>
            <HeaderAdd title='Employe'
                       onAdd={() =>
                           setShowAddEmploye(!showAddEmploye)}
                       showAdd={showAddEmploye}/>
            {showAddEmploye && <AddEmploye onAdd={addEmploye}/>}
            {employes.length > 0 ?
                <Employes employes={employes}
                          onDelete={deleteEmploye}
                          onUpdate={(employe) => {
                              setShowUpdateEmploye(!showUpdateEmploye)
                              setEmploye(employe)
                          }}
                          showUpdate={showUpdateEmploye}
                />
                : 'No Employes'}
            {showUpdateEmploye && <UpdateEmploye employe={employe} onUpdate={updateEmploye}/>}
        </div>
    )
}

export default PageEmploye