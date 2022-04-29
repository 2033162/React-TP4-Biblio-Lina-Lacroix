import Document from "./Document";
const Documents = ({documents, onDelete, onToggle}) => {
    return (
        <>
            {documents.map((document) => (
                <Document key={document.id}
                          document={document}
                          onDelete={onDelete}
                          onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Documents