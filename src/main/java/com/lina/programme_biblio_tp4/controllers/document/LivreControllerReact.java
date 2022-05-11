package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.document.LivreDto;
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

    @GetMapping
    public List<LivreDto> getAllLivres() {
        return serviceDocument.findAllLivres();
    }

    @GetMapping("/{id}")
    public DocumentDto getLivre(@PathVariable long id) {
        return serviceDocument.getDocument(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public DocumentDto addLivre(@RequestBody LivreDto livreDto) {
        return serviceDocument.saveDocument(livreDto.toDocument());
    }

    @PutMapping("/{id}")
    public LivreDto updateLivre(@PathVariable long id,
                                   @RequestBody LivreDto livreDtoDetail) {
        LivreDto livre = serviceDocument.getLivre(id);

        livre.setGenreDocument(livreDtoDetail.getGenreDocument());
        livre.setEtatDocument(livreDtoDetail.getEtatDocument());
        livre.setTitre(livreDtoDetail.getTitre());
        livre.setAuteur(livreDtoDetail.getAuteur());
        livre.setEditeur(livreDtoDetail.getEditeur());
        livre.setAnneePublication(livreDtoDetail.getAnneePublication());
        livre.setNbrExemplaire(livreDtoDetail.getNbrExemplaire());
        livre.setNbrPages(livreDtoDetail.getNbrPages());
        livre.setGenreLivre(livreDtoDetail.getGenreLivre());

        return serviceDocument.saveLivre(livre);
    }

    @DeleteMapping("/{id}")
    public void deleteLivre(@PathVariable long id) {
        LivreDto livre = (LivreDto) serviceDocument.getDocument(id);
        serviceDocument.removeDocument(livre.toDocument());
    }
}
