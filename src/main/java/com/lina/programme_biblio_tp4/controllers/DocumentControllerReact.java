package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.document.CdForm;
import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.forms.document.DvdForm;
import com.lina.programme_biblio_tp4.forms.document.LivreForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/livres")
    public List<LivreForm> getAllLivres() {
        return serviceDocument.findAllLivres();
    }

    @GetMapping("/cds")
    public List<CdForm> getAllCds() {
        return serviceDocument.findAllCds();
    }

    @GetMapping("/dvds")
    public List<DvdForm> getAllDvds() {
        return serviceDocument.findAllDvds();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/livres")
    public DocumentForm addLivre(@RequestBody LivreForm livreForm) {
        return serviceDocument.saveDocument(livreForm.toDocument());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cds")
    public DocumentForm addCd(@RequestBody CdForm cdForm) {
        return serviceDocument.saveDocument(cdForm.toDocument());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/dvds")
    public DocumentForm addDvd(@RequestBody DvdForm dvdForm) {
        return serviceDocument.saveDocument(dvdForm.toDocument());
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

        return serviceDocument.saveDocument(document.toDocument());
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(@PathVariable long id) {
        DocumentForm document = serviceDocument.getDocument(id).toDocumentForm();

        serviceDocument.removeDocument(document.toDocument());
    }
}
