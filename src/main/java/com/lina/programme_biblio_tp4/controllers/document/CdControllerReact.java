package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.forms.document.CdForm;
import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cds")
public class CdControllerReact {

    private ServiceDocument serviceDocument;

    @GetMapping("/cds")
    public List<CdForm> getAllCds() {
        return serviceDocument.findAllCds();
    }

    @GetMapping("/{id}")
    public DocumentForm getCd(@PathVariable long id) {
        return serviceDocument.getDocument(id).toDocumentForm();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cds")
    public DocumentForm addCd(@RequestBody CdForm cdForm) {
        return serviceDocument.saveDocument(cdForm.toDocument());
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

    @DeleteMapping("/cds/{id}")
    public void deleteCd(@PathVariable long id) {
        CdForm cd = (CdForm) serviceDocument.getDocument(id).toDocumentForm();
        serviceDocument.removeDocument(cd.toDocument());
    }
}
