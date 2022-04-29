import {useState} from 'react'

const AddClient = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [rue, setRue] = useState('')
    const [ville, setVille] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [numeroTelephone, setNumeroTelephone] = useState('')
    const [dateInscription, setDateInscription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!nom) {
            alert('Please add client')
            return
        }

        onAdd({
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
                       value={numeroTelephone}
                       onChange={(e) => setNumeroTelephone(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date de l'inscription</label>
                <input type='text' placeholder='Date inscription'
                       value={dateInscription}
                       onChange={(e) => setDateInscription(e.target.value)}/>
            </div>
            <input type='submit' value='Save Client' className='btn btn-block'/>
        </form>
    )
}

export default AddClient