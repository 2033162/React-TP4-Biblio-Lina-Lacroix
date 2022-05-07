package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.forms.document.DvdForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/dvds")
public class DvdControllerReact {

    private ServiceDocument serviceDocument;

    @GetMapping("/dvds")
    public List<DvdForm> getAllDvds() {
        return serviceDocument.findAllDvds();
    }

    @GetMapping("/{id}")
    public DocumentForm getDvd(@PathVariable long id) {
        return serviceDocument.getDocument(id).toDocumentForm();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/dvds")
    public DocumentForm addDvd(@RequestBody DvdForm dvdForm) {
        return serviceDocument.saveDocument(dvdForm.toDocument());
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

    @DeleteMapping("/dvds/{id}")
    public void deleteDvd(@PathVariable long id) {
        DvdForm dvd = (DvdForm) serviceDocument.getDocument(id).toDocumentForm();
        serviceDocument.removeDocument(dvd.toDocument());
    }
}
