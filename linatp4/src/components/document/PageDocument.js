import React, {useState} from 'react';
import Header2 from "../Header2";
import Documents from "./Documents";
import AddDocument from "./AddDocument";

const PageDocument = () => {

    const [showAddDocument, setShowAddDocument] = useState(false)

    const [documents, setDocuments] = useState([{
        id: 1,
        etatDocument: "DISPONIBLE",
        genreDocument: "CD",
        titre: "harry potter",
        auteur: "JK. Rolling",
        editeur: "maison edition",
        anneePublication: "2000",
        nbrExemplaire: "3",
    },
        {
            id: 2,
            etatDocument: "ENDOMMAGE",
            genreDocument: "DVD",
            titre: "bobby bob",
            auteur: "lilo lee",
            editeur: "edition bop",
            anneePublication: "2018",
            nbrExemplaire: "5",
        },
        {
            id: 3,
            etatDocument: "EMPRUNTE",
            genreDocument: "livre",
            titre: "avengers",
            auteur: "Josh whedon",
            editeur: "marvel",
            anneePublication: "2020",
            nbrExemplaire: "2",
        }])

    const addDocument = (document) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newDocument = {id, ...document}
        setDocuments([...documents, newDocument])
    }

    const deleteDocument = (id) => {
        setDocuments(documents.filter((document) => document.id !== id))
    }

    return (
        <div className='container'>
            <Header2 title='Document'
                     onAdd={() =>
                         setShowAddDocument(!showAddDocument)}
                     showAdd={showAddDocument}/>
            {showAddDocument && <AddDocument onAdd={addDocument} />}
            {documents.length > 0 ?
                <Documents documents={documents}
                           onDelete={deleteDocument} />
                : 'No Documents'}
        </div>
    );
};

export default PageDocument;