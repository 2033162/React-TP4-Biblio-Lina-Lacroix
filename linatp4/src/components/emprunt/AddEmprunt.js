import {useState} from "react";
import isMatch from "date-fns/isMatch";

const AddEmprunt = ({onAdd}) => {
    const[dateInitial, setDateInitial] = useState('')
    const[dateExpire, setDateExpire] = useState('')
    const[nbrRappel, setNbrRappel] = useState(0)
    const[nom, setNom] = useState('')
    const[prenom, setPrenom] = useState('')
    const[titre, setTitre] = useState('')
    const[auteur, setAuteur] = useState('')
    const[anneePublication, setAnneePublication] = useState(0)
    const[genreDocument, setGenreDocument] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            !dateInitial &&
            !dateExpire &&
            !nbrRappel &&
            !nom &&
            !prenom &&
            !titre &&
            !auteur &&
            !anneePublication &&
            !genreDocument
        ) {
            alert('Please fill fields of Emprunt')
            return
        }

        if (
            !dateInitial
        ) {
            alert('Please fill field dateInitial')
            return
        }

        if (
            !dateExpire
        ) {
            alert('Please fill field dateExpire')
            return
        }

        if (
            !nbrRappel
        ) {
            alert('Please fill field nbrRappel')
            return
        }

        if (
            !nom
        ) {
            alert('Please fill field nom')
            return
        }

        if (
            !prenom
        ) {
            alert('Please fill field prenom')
            return
        }

        if (
            !titre
        ) {
            alert('Please fill field titre')
            return
        }

        if (
            !auteur
        ) {
            alert('Please fill field auteur')
            return
        }

        if (
            !anneePublication
        ) {
            alert('Please fill field anneePublication')
            return
        }

        if (
            !genreDocument
        ) {
            alert('Please fill field genreDocument')
            return
        }

        if (!isMatch(dateInitial, 'yyyy-MM-dd')) {
            alert('Please make dateInitial in format yyyy-MM-dd')
            return
        }

        if (!isMatch(dateExpire, 'yyyy-MM-dd')) {
            alert('Please make dateExpire in format yyyy-MM-dd')
            return
        }

        onAdd({
            dateInitial,
            dateExpire,
            nbrRappel,
            nom,
            prenom,
            titre,
            auteur,
            anneePublication,
            genreDocument
        })
        setDateInitial('')
        setDateExpire('')
        setNbrRappel(0)
        setNom('')
        setPrenom('')
        setTitre('')
        setAuteur('')
        setAnneePublication(0)
        setGenreDocument('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Date initial</label>
                <input type='text' placeholder='Date initial yyyy-MM-dd'
                       value={dateInitial}
                       onChange={(e) => setDateInitial(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date expire</label>
                <input type='text' placeholder='Date expire yyyy-MM-dd'
                       value={dateExpire}
                       onChange={(e) => setDateExpire(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Nombre de rappel</label>
                <input type='number' placeholder='Nombre de rappel'
                       value={nbrRappel}
                       onChange={(e) => setNbrRappel(e.target.value)}/>
            </div>
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
                <label>Titre</label>
                <input type='text' placeholder='Titre'
                       value={titre}
                       onChange={(e) => setTitre(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Auteur</label>
                <input type='text' placeholder='Auteur'
                       value={auteur}
                       onChange={(e) => setAuteur(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Annee de publication</label>
                <input type='number' placeholder='Annee de publication'
                       value={anneePublication}
                       onChange={(e) => setAnneePublication(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre de document</label>
                <select defaultValue={genreDocument}
                        onChange={(e) => setGenreDocument(e.target.value)}>
                    <option value="CD">CD</option>
                    <option value="DVD">DVD</option>
                    <option value="livre">livre</option>
                </select>
            </div>
            <input type='submit' value='Save Emprunt' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default AddEmprunt