import {useEffect, useState} from 'react'
import isMatch from 'date-fns/isMatch'
import {useParams} from "react-router-dom";

const UpdateClient = ({onUpdate}) => {
    const {id} = useParams()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [rue, setRue] = useState('')
    const [ville, setVille] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [numeroTelephone, setNumeroTelephone] = useState('')
    const [dateInscription, setDateInscription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            !nom &&
            !prenom &&
            !rue &&
            !ville &&
            !codePostal &&
            !numeroTelephone &&
            !dateInscription
        ) {
            alert('Please add client')
            return
        }

        if (
            !nom
        ) {
            alert('Please add nom')
            return
        }

        if (
            !prenom
        ) {
            alert('Please add prenom')
            return
        }

        if (
            !rue
        ) {
            alert('Please add rue')
            return
        }

        if (
            !ville
        ) {
            alert('Please add ville')
            return
        }

        if (
            !codePostal
        ) {
            alert('Please add codePostal')
            return
        }

        if (
            !numeroTelephone
        ) {
            alert('Please add numeroTelephone')
            return
        }

        if (
            !dateInscription
        ) {
            alert('Please add dateInscription')
            return
        }

        if (!isMatch(dateInscription, 'yyyy-MM-dd')) {
            alert('Please make dateInscription in format yyyy-MM-dd')
            return
        }

        onUpdate({
            nom,
            prenom,
            rue,
            ville,
            codePostal,
            numeroTelephone,
            dateInscription
        })
        setNom('')
        setPrenom('')
        setRue('')
        setVille('')
        setCodePostal('')
        setNumeroTelephone('')
        setDateInscription('')
    }

    /*useEffect(() => {
        fetchClient(id).then(client => {
            setNom(client.data.nom);
            setPrenom(client.data.prenom);
            setRue(client.data.rue);
            setVille(client.data.ville);
            setCodePostal(client.data.codePostal);
            setNumeroTelephone(client.data.numeroTelephone);
            setDateInscription(client.data.dateInscription);
        }).catch(error => {
            console.log('Something went wrong', error)
        })
    })

    const fetchClient = async (id) => {
        const res = await fetch(`http://localhost:8080/clients/${id}`)
        const data = await res.json()
        return data
    }*/

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nom</label>
                <input type='text' placeholder='Nom'
                       value={nom}
                       onChange={(e) => setNom(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Prenom</label>
                <input type='text' placeholder='Prenom'
                       value={prenom}
                       onChange={(e) => setPrenom(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Rue</label>
                <input type='text' placeholder='Rue'
                       value={rue}
                       onChange={(e) => setRue(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Ville</label>
                <input type='text' placeholder='Ville'
                       value={ville}
                       onChange={(e) => setVille(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Code postal</label>
                <input type='text' placeholder='Code postal'
                       value={codePostal}
                       onChange={(e) => setCodePostal(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Numero de telephone</label>
                <input type='text' placeholder='Numero de telephone'
                       defaultValue="514-"
                       onChange={(e) => setNumeroTelephone(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date de l'inscription</label>
                <input type='text' placeholder='Date inscription yyyy-MM-dd'
                       value={dateInscription}
                       onChange={(e) => setDateInscription(e.target.value)}/>
            </div>
            <input type='submit' value='Update Client' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default UpdateClient