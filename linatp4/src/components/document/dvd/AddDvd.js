import {useState} from "react";

const AddDvd = ({onAdd}) => {
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('dvd')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState(0)
    const [nbrExemplaire, setNbrExemplaire] = useState(0)
    const [duree, setDuree] = useState(0)
    const [genreFilm, setGenreFilm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            !etatDocument &&
            !genreDocument &&
            !titre &&
            !auteur &&
            !editeur &&
            !anneePublication &&
            !nbrExemplaire &&
            !duree &&
            !genreFilm
        ) {
            alert('Please add Document dvd')
            return
        }

        if (
            !genreDocument
        ) {
            alert('Please add genreDocument')
            return
        }

        if (
            !etatDocument
        ) {
            alert('Please add etatDocument')
            return
        }

        if (
            !auteur
        ) {
            alert('Please add auteur')
            return
        }

        if (
            !titre
        ) {
            alert('Please add titre')
            return
        }

        if (
            !editeur
        ) {
            alert('Please add editeur')
            return
        }

        if (
            !anneePublication
        ) {
            alert('Please add anneePublication')
            return
        }

        if (
            !nbrExemplaire
        ) {
            alert('Please add nbrExemplaire')
            return
        }

        if (
            !duree
        ) {
            alert('Please add duree')
            return
        }

        if (
            !genreFilm
        ) {
            alert('Please add genreFilm')
            return
        }

        onAdd({
            etatDocument,
            genreDocument,
            titre,
            auteur,
            editeur,
            anneePublication,
            nbrExemplaire,
            duree,
            genreFilm
        })
        setEtatDocument('')
        setGenreDocument('dvd')
        setTitre('')
        setAuteur('')
        setEditeur('')
        setAnneePublication(0)
        setNbrExemplaire(0)
        setDuree(0)
        setGenreFilm(0)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Etat du document</label>
                <select defaultValue={etatDocument}
                        onChange={(e) => setEtatDocument(e.target.value)}>
                    <option value="DISPONIBLE">DISPONIBLE</option>
                    <option value="RESERVE">RESERVE</option>
                    <option value="EMPRUNTE">EMPRUNTE</option>
                    <option value="ENDOMMAGE">ENDOMMAGE</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Genre du document</label>
                <input type='text' defaultValue={genreDocument}
                       disabled="disabled"/>
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
                <label>Editeur</label>
                <input type='text' placeholder='Editeur'
                       value={editeur}
                       onChange={(e) => setEditeur(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Annee de publication</label>
                <input type='number' placeholder='Annee de publication'
                       value={anneePublication}
                       onChange={(e) => setAnneePublication(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Nombre d'exemplaire</label>
                <input type='number' placeholder='Nombre exemplaire'
                       value={nbrExemplaire}
                       onChange={(e) => setNbrExemplaire(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Duree</label>
                <input type='number' placeholder='Duree'
                       value={duree}
                       onChange={(e) => setDuree(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre du film</label>
                <select defaultValue={genreFilm}
                        onChange={(e) => setGenreFilm(e.target.value)}>
                    <option value="Aventure">Aventure</option>
                    <option value="Guerre">Guerre</option>
                    <option value="Histoire">Histoire</option>
                    <option value="Action">Action</option>
                    <option value="Comedie">Comedie</option>
                    <option value="Drame">Drame</option>
                    <option value="Comedie dramatique">Comedie dramatique</option>
                    <option value="Fiction jeunesse">Fiction jeunesse</option>
                    <option value="Anime">Anime</option>
                    <option value="Film musical">Film musical</option>
                    <option value="Policier">Policier</option>
                    <option value="Espionnage">Espionnage</option>
                    <option value="Science fiction">Science fiction</option>
                    <option value="Fantastique">Fantastique</option>
                    <option value="Horreur">Horreur</option>
                    <option value="Western">Western</option>
                    <option value="Documentaire">Documentaire</option>
                </select>
            </div>
            <input type='submit' value='Save document dvd' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default AddDvd