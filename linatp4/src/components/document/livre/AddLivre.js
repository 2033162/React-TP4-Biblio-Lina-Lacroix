import {useState} from 'react'

const AddLivre = ({onAdd}) => {
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState('')
    const [nbrExemplaire, setNbrExemplaire] = useState('')
    const [nbrPages, setNbrPages] = useState('')
    const [genreLivre, setGenreLivre] = useState('')

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
            !nbrPages &&
            !genreLivre
        ) {
            alert('Please add Document livre')
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
            !nbrPages
        ) {
            alert('Please add nbrPages')
            return
        }

        if (
            !genreLivre
        ) {
            alert('Please add genreLivre')
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
            nbrPages,
            genreLivre
        })
        setEtatDocument('')
        setGenreDocument('')
        setTitre('')
        setAuteur('')
        setEditeur('')
        setAnneePublication('')
        setNbrExemplaire('')
        setNbrPages('')
        setGenreLivre('')
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
                <input type='text' placeholder='livre'
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
                <label>Nombre de pages</label>
                <input type='text' placeholder='Nombre de pages'
                        value={nbrPages}
                        onChange={(e) => setNbrPages(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre du livre</label>
                <input type='text' placeholder='Genre du livre'
                        value={genreLivre}
                        onChange={(e) => setGenreLivre(e.target.value)}/>
            </div>
            <input type='submit' value='Save document livre' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default AddLivre