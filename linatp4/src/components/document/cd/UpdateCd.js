import {useState} from "react";

const UpdateCd = ({onUpdate}) => {
    const [etatDocument, setEtatDocument] = useState('')
    const [genreDocument, setGenreDocument] = useState('cd')
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [anneePublication, setAnneePublication] = useState(0)
    const [nbrExemplaire, setNbrExemplaire] = useState(0)
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

        onUpdate({
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
        setGenreDocument('cd')
        setTitre('')
        setAuteur('')
        setEditeur('')
        setAnneePublication(0)
        setNbrExemplaire(0)
        setGenreMusique('')
        setCompositeur('')
        setInterprete('')
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
                <label>Genre de musique</label>
                <select defaultValue={genreMusique}
                        onChange={(e) => setGenreMusique(e.target.value)}>
                    <option value="Classique">Classique</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Pop">Pop</option>
                    <option value="Soul">Soul</option>
                    <option value="Rap">Rap</option>
                    <option value="Folk">Folk</option>
                    <option value="Punk">Punk</option>
                    <option value="Metal">Metal</option>
                    <option value="hip-hop">hip-hop</option>
                    <option value="rnb">rnb</option>
                    <option value="country">country</option>
                    <option value="Electronique">Electronique</option>
                    <option value="Flamenco">Flamenco</option>
                    <option value="Rock">Rock</option>
                    <option value="reggae">reggae</option>
                </select>
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
            <input type='submit' value='Update document cd' className='btn btn-block bg-black text-light'/>
        </form>
    )
}

export default UpdateCd