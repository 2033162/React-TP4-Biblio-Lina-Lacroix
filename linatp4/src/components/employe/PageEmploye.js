import {useEffect, useState} from "react";
import HeaderAdd from "../HeaderAdd";
import Employes from "./Employes";
import AddEmploye from "./AddEmploye";
import UpdateEmploye from "./UpdateEmploye";

const PageEmploye = () => {
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

    const fetchEmploye = async (id) => {
        const res = await fetch(`http://localhost:8080/employes/${id}`)
        const data = await res.json()
        return data
    }

    const [showAddEmploye, setShowAddEmploye] = useState(false)
    const [employes, setEmployes] = useState([])

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

    const [showUpdateEmploye, setShowUpdateEmploye] = useState(false)

    const updateEmploye = async (id) => {
        const employeToUpdate = await fetchEmploye(id)
        const updateEmploye = await {...employeToUpdate,
            nom: !employeToUpdate.nom,
            prenom: !employeToUpdate.prenom,
            fonction: !employeToUpdate.fonction
        }

        const res = await fetch(`http://localhost:8080/employes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(updateEmploye)
        })
        const data = await res.json()
        setEmployes(
            employes.map(
                (employe) => employe.id === id ?
                    {...employe,
                    nom: data.nom,
                    prenom: data.prenom,
                    fonction: data.fonction} : employe
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
                          onUpdate={() =>
                              setShowUpdateEmploye(!showUpdateEmploye)}
                          showUpdate={showUpdateEmploye}
                />
                : 'No Employes'
            }
            {showUpdateEmploye && <UpdateEmploye onUpdate={updateEmploye}/>}
        </div>
    )
}

export default PageEmploye