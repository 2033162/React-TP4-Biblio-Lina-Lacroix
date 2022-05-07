import {useState} from 'react'

const AddLivre = ({onAdd}) => {
    const [nbrPages, setNbrPages] = useState('')
    const [genreLivre, setGenreLivre] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            !nbrPages &&
            !genreLivre
        ) {
            alert('Please add Livre')
        }

        if (
            !nbrPages
        ) {
            alert('Please add nbrPages')
        }

        if (
            !genreLivre
        ) {
            alert('Please add genreLivre')
        }

        onAdd({
            nbrPages,
            genreLivre
        })
        setNbrPages('')
        setGenreLivre('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
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
            <input type='submit' value='Save document livre' className='btn btn-block'/>
        </form>
    )
}

export default AddLivre