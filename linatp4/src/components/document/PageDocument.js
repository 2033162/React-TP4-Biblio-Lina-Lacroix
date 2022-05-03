import React, {useState} from 'react';
import Header2 from "../Header2";
import Documents from "./Documents";
import AddDocument from "./AddDocument";

const PageDocument = () => {

    const [showAddDocument, setShowAddDocument] = useState(false)

    const [documents, setDocuments] = useState([])

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