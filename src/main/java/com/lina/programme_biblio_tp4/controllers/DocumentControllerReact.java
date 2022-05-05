package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/documents")
public class DocumentControllerReact {

    private ServiceDocument serviceDocument;

    @GetMapping
    public List<DocumentForm> getAllDocuments() {
        return serviceDocument.findAllDocuments();
    }

    @GetMapping("/{id}")
    public DocumentForm getDocument(@PathVariable long id) {
        return serviceDocument.getDocument(id).toDocumentForm();
    }

    @PostMapping
    public ResponseEntity<DocumentForm> addDocument(@RequestBody DocumentForm documentForm) {
        return new ResponseEntity<>(serviceDocument.saveDocument(documentForm.toDocument()).toDocumentForm(),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public DocumentForm updateDocument(@PathVariable long id, @RequestBody DocumentForm documentFormDetail) {
        DocumentForm document = serviceDocument.getDocument(id).toDocumentForm();

        document.setEtatDocument(documentFormDetail.getEtatDocument());
        document.setGenreDocument(documentFormDetail.getGenreDocument());
        document.setTitre(documentFormDetail.getTitre());
        document.setAuteur(documentFormDetail.getAuteur());
        document.setEditeur(documentFormDetail.getEditeur());
        document.setAnneePublication(documentFormDetail.getAnneePublication());
        document.setNbrExemplaire(documentFormDetail.getNbrExemplaire());

        return serviceDocument.saveDocument(document.toDocument()).toDocumentForm();
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable long id) {
        DocumentForm document = serviceDocument.getDocument(id).toDocumentForm();

        serviceDocument.removeDocument(document.toDocument());
    }
}
