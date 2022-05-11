import {useEffect, useState} from 'react'

const UpdateLivre = ({livre, onUpdate}) => {
    const [id, setId] = useState(0)
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState(0)
    const [nbrExemplaire, setNbrExemplaire] = useState(0)
    const [nbrPages, setNbrPages] = useState(0)
    const [genreLivre, setGenreLivre] = useState('')

    useEffect(() => {
        setId(livre.id)
        setEtatDocument(livre.etatDocument)
        setGenreDocument(livre.genreDocument)
        setTitre(livre.titre)
        setAuteur(livre.auteur)
        setEditeur(livre.editeur)
        setAnneePublication(livre.anneePublication)
        setNbrExemplaire(livre.nbrExemplaire)
        setNbrPages(livre.nbrPages)
        setGenreLivre(livre.genreLivre)
    }, [])

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

        onUpdate({
            id,
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
        setAnneePublication(0)
        setNbrExemplaire(0)
        setNbrPages(0)
        setGenreLivre('')
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
                <input type='text'
                       value={genreDocument}
                       disabled="disabled"
                       onChange={(e) => setGenreDocument(e.target.value)}
                />
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
                <label>Nombre de pages</label>
                <input type='number' placeholder='Nombre de pages'
                       value={nbrPages}
                       onChange={(e) => setNbrPages(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Genre du livre</label>
                <select defaultValue={genreLivre}
                        onChange={(e) => setGenreLivre(e.target.value)}>
                    <option value="ROMAN">ROMAN</option>
                    <option value="MANUEL">MANUEL</option>
                    <option value="ETUDE">ETUDE</option>
                    <option value="MAGAZINE">MAGAZINE</option>
                </select>
            </div>
            <input type='submit' value='Update document livre' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default UpdateLivre