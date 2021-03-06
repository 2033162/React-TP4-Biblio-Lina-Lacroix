package com.lina.programme_biblio_tp4.controllers.document;

import com.lina.programme_biblio_tp4.dtos.document.CdDto;
import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
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

    @GetMapping
    public List<CdDto> getAllCds() {
        return serviceDocument.findAllCds();
    }

    @GetMapping("/{id}")
    public DocumentDto getCd(@PathVariable long id) {
        return serviceDocument.getDocument(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public DocumentDto addCd(@RequestBody CdDto cdDto) {
        return serviceDocument.saveDocument(cdDto.toDocument());
    }

    @PutMapping("/{id}")
    public CdDto updateCd(@PathVariable long id,
                                @RequestBody CdDto cdDtoDetail) {
        CdDto cd = serviceDocument.getCD(id);

        cd.setEtatDocument(cdDtoDetail.getEtatDocument());
        cd.setGenreDocument(cdDtoDetail.getGenreDocument());
        cd.setTitre(cdDtoDetail.getTitre());
        cd.setEditeur(cdDtoDetail.getEditeur());
        cd.setAuteur(cdDtoDetail.getAuteur());
        cd.setAnneePublication(cdDtoDetail.getAnneePublication());
        cd.setNbrExemplaire(cdDtoDetail.getNbrExemplaire());
        cd.setGenreMusique(cdDtoDetail.getGenreMusique());
        cd.setCompositeur(cdDtoDetail.getCompositeur());
        cd.setInterprete(cdDtoDetail.getInterprete());

        return serviceDocument.saveCD(cd);
    }

    @DeleteMapping("/{id}")
    public void deleteCd(@PathVariable long id) {
        CdDto cd = (CdDto) serviceDocument.getDocument(id);
        serviceDocument.removeDocument(cd.toDocument());
    }
}
