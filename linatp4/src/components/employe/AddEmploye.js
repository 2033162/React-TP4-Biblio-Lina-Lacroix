import {useState} from 'react'

const AddEmploye = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [fonction, setFonction] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            !nom &&
            !prenom &&
            !fonction
        ) {
            alert('Please add employe')
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
            !fonction
        ) {
            alert('Please add rue')
            return
        }

        onAdd({
            nom,
            prenom,
            fonction
        })
        setNom('')
        setPrenom('')
        setFonction('')
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
                <label>Fonction</label>
                <select defaultValue={fonction}
                        onChange={(e) => setFonction(e.target.value)}>
                    <option value="GESTIONNAIRE">GESTIONNAIRE</option>
                    <option value="PREPOSE">PREPOSE</option>
                </select>
            </div>
            <input type='submit' value='Save Employe' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default AddEmploye