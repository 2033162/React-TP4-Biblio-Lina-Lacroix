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

    @PatchMapping("/livres/{id}")
    public DocumentForm updateLivre(@PathVariable long id,
                                       @RequestBody LivreForm livreFormDetail) {
        LivreForm livre = (LivreForm) serviceDocument.getLivre(id).orElseThrow(RuntimeException::new).toDocumentForm();

        livre.setGenreDocument(livreFormDetail.getGenreDocument());
        livre.setEtatDocument(livreFormDetail.getEtatDocument());
        livre.setTitre(livreFormDetail.getTitre());
        livre.setAuteur(livreFormDetail.getAuteur());
        livre.setEditeur(livreFormDetail.getEditeur());
        livre.setAnneePublication(livreFormDetail.getAnneePublication());
        livre.setNbrExemplaire(livreFormDetail.getNbrExemplaire());
        livre.setNbrPages(livreFormDetail.getNbrPages());
        livre.setGenreLivre(livreFormDetail.getGenreLivre());

        return serviceDocument.saveDocument(livre.toDocument());
    }

    @PatchMapping("/cds/{id}")
    public DocumentForm updateCd(@PathVariable long id,
                                       @RequestBody CdForm cdFormDetail) {
        CdForm cd = (CdForm) serviceDocument.getCD(id).orElseThrow(RuntimeException::new).toDocumentForm();

        cd.setEtatDocument(cdFormDetail.getEtatDocument());
        cd.setGenreDocument(cdFormDetail.getGenreDocument());
        cd.setTitre(cdFormDetail.getTitre());
        cd.setEditeur(cdFormDetail.getEditeur());
        cd.setAuteur(cdFormDetail.getAuteur());
        cd.setAnneePublication(cdFormDetail.getAnneePublication());
        cd.setNbrExemplaire(cdFormDetail.getNbrExemplaire());
        cd.setGenreMusique(cdFormDetail.getGenreMusique());
        cd.setCompositeur(cdFormDetail.getCompositeur());
        cd.setInterprete(cdFormDetail.getInterprete());

        return serviceDocument.saveDocument(cd.toDocument());
    }

    @PatchMapping("/dvds/{id}")
    public DocumentForm updateDvd(@PathVariable long id,
                                 @RequestBody DvdForm dvdFormDetail) {
        DvdForm dvd = (DvdForm) serviceDocument.getDVD(id).orElseThrow(RuntimeException::new).toDocumentForm();

        dvd.setEtatDocument(dvdFormDetail.getEtatDocument());
        dvd.setGenreDocument(dvdFormDetail.getGenreDocument());
        dvd.setTitre(dvdFormDetail.getTitre());
        dvd.setAuteur(dvdFormDetail.getAuteur());
        dvd.setEditeur(dvdFormDetail.getEditeur());
        dvd.setAnneePublication(dvdFormDetail.getAnneePublication());
        dvd.setNbrExemplaire(dvdFormDetail.getNbrExemplaire());
        dvd.setDuree(dvdFormDetail.getDuree());
        dvd.setGenreFilm(dvdFormDetail.getGenreFilm());

        return serviceDocument.saveDocument(dvd.toDocument());
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(@PathVariable long id) {
        DocumentForm document = serviceDocument.getDocument(id).toDocumentForm();

        serviceDocument.removeDocument(document.toDocument());
    }
}
