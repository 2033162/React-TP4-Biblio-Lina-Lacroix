package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.document.DvdDto;
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

    @GetMapping
    public List<DvdDto> getAllDvds() {
        return serviceDocument.findAllDvds();
    }

    @GetMapping("/{id}")
    public DocumentDto getDvd(@PathVariable long id) {
        return serviceDocument.getDocument(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public DocumentDto addDvd(@RequestBody DvdDto dvdDto) {
        return serviceDocument.saveDocument(dvdDto.toDocument());
    }

    @PatchMapping("/{id}")
    public DocumentDto updateDvd(@PathVariable long id,
                                 @RequestBody DvdDto dvdDtoDetail) {
        DvdDto dvd = serviceDocument.getDVD(id);

        dvd.setEtatDocument(dvdDtoDetail.getEtatDocument());
        dvd.setGenreDocument(dvdDtoDetail.getGenreDocument());
        dvd.setTitre(dvdDtoDetail.getTitre());
        dvd.setAuteur(dvdDtoDetail.getAuteur());
        dvd.setEditeur(dvdDtoDetail.getEditeur());
        dvd.setAnneePublication(dvdDtoDetail.getAnneePublication());
        dvd.setNbrExemplaire(dvdDtoDetail.getNbrExemplaire());
        dvd.setDuree(dvdDtoDetail.getDuree());
        dvd.setGenreFilm(dvdDtoDetail.getGenreFilm());

        return serviceDocument.saveDocument(dvd.toDocument());
    }

    @DeleteMapping("/{id}")
    public void deleteDvd(@PathVariable long id) {
        DvdDto dvd = (DvdDto) serviceDocument.getDocument(id);
        serviceDocument.removeDocument(dvd.toDocument());
    }
}
