import {useState} from "react";

const AddDvd = ({onAdd}) => {
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState('')
    const [nbrExemplaire, setNbrExemplaire] = useState('')
    const [duree, setDuree] = useState('')
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
        setGenreDocument('')
        setTitre('')
        setAuteur('')
        setEditeur('')
        setAnneePublication('')
        setNbrExemplaire('')
        setDuree('')
        setGenreFilm('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Etat du document</label>
                <input type='text' placeholder='DISPONIBLE, RESERVE, EMPRUNTE, ENDOMMAGE'
                       value={etatDocument}
                       onChange={(e) => setEtatDocument(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre du document</label>
                <input type='text' placeholder='dvd'
                       value={genreDocument}
                       onChange={(e) => setGenreDocument(e.target.value)}/>
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
                <input type='text' placeholder='Annee de publication'
                       value={anneePublication}
                       onChange={(e) => setAnneePublication(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Nombre d'exemplaire</label>
                <input type='text' placeholder='Nombre exemplaire'
                       value={nbrExemplaire}
                       onChange={(e) => setNbrExemplaire(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Duree</label>
                <input type='text' placeholder='Duree'
                       value={duree}
                       onChange={(e) => setDuree(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre du film</label>
                <input type='text' placeholder='Genre du film'
                       value={genreFilm}
                       onChange={(e) => setGenreFilm(e.target.value)}/>
            </div>
            <input type='submit' value='Save document dvd' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default AddDvd