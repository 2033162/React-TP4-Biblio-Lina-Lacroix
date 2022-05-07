package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.forms.document.LivreForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/livres")
public class LivreControllerReact {

    private ServiceDocument serviceDocument;

    @GetMapping("/livres")
    public List<LivreForm> getAllLivres() {
        return serviceDocument.findAllLivres();
    }

    @GetMapping("/{id}")
    public DocumentForm getLivre(@PathVariable long id) {
        return serviceDocument.getDocument(id).toDocumentForm();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/livres")
    public DocumentForm addLivre(@RequestBody LivreForm livreForm) {
        return serviceDocument.saveDocument(livreForm.toDocument());
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

    @DeleteMapping("/livres/{id}")
    public void deleteLivre(@PathVariable long id) {
        LivreForm livre = (LivreForm) serviceDocument.getDocument(id).toDocumentForm();
        serviceDocument.removeDocument(livre.toDocument());
    }
}
