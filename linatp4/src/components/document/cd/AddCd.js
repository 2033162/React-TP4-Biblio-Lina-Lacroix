import {useState} from "react";

const AddCd = ({onAdd}) => {
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState('')
    const [nbrExemplaire, setNbrExemplaire] = useState('')
    const [genreMusique, setGenreMusique] = useState('')
    const [compositeur, setCompositeur] = useState('')
    const [interprete, setInterprete] = useState('')

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
            !genreMusique &&
            !compositeur &&
            !interprete
        ) {
            alert('Please add Document cd')
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
            !genreMusique
        ) {
            alert('Please add genreMusique')
            return
        }

        if (
            !compositeur
        ) {
            alert('Please add compositeur')
            return
        }

        if (
            !interprete
        ) {
            alert('Please add interprete')
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
            genreMusique,
            compositeur,
            interprete
        })
        setEtatDocument('')
        setGenreDocument('')
        setTitre('')
        setAuteur('')
        setEditeur('')
        setAnneePublication('')
        setNbrExemplaire('')
        setGenreMusique('')
        setCompositeur('')
        setInterprete('')
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
                <input type='text' placeholder='cd'
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
                <label>Genre de musique</label>
                <input type='text' placeholder='Genre de musique'
                       value={genreMusique}
                       onChange={(e) => setGenreMusique(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Compositeur</label>
                <input type='text' placeholder='Compositeur'
                       value={compositeur}
                       onChange={(e) => setCompositeur(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Interprete</label>
                <input type='text' placeholder='Interprete'
                       value={interprete}
                       onChange={(e) => setInterprete(e.target.value)}/>
            </div>
            <input type='submit' value='Save document cd' className='btn btn-block'/>
        </form>
    )
}

export default AddCd