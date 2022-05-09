package com.lina.programme_biblio_tp4.controllers.emprunt;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.emprunt.EmpruntDtoDocument;
import com.lina.programme_biblio_tp4.dtos.utilisateurs.ClientDto;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import com.lina.programme_biblio_tp4.service.ServiceEmpruntDocuments;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/empruntDocuments")
public class EmpruntDocumentControllerReact {

    private ServiceEmpruntDocuments serviceEmpruntDocuments;
    private ServiceClient serviceClient;
    private ServiceDocument serviceDocument;

    @GetMapping
    public List<EmpruntDtoDocument> getAllEmpruntDocuments() {
        return serviceEmpruntDocuments.findAllEmpruntDocuments();
    }

    @GetMapping("/{id}")
    public EmpruntDtoDocument getEmpruntDocument(@PathVariable long id) {
        return serviceEmpruntDocuments.getEmpruntDocuments(id);
    }

    @GetMapping("/clients")
    public List<EmpruntDtoDocument> getAllClientEmprunt() {
        return serviceEmpruntDocuments.getAllClientsEmprunts();
    }

    @GetMapping("/clients/{id}")
    public List<EmpruntDtoDocument> getClientAllEmprunts(@PathVariable long id) {
        return serviceEmpruntDocuments.getClientEmprunt(id);
    }

    @PostMapping
    public EmpruntDtoDocument addEmprunt(@RequestBody EmpruntDtoDocument empruntDtoDocuments) throws ParseException {
        ClientDto clientDto = serviceClient.findByName(empruntDtoDocuments.getNom());
        List<DocumentDto> documents = serviceDocument.searchDocument(empruntDtoDocuments.getTitre(),
                empruntDtoDocuments.getAuteur(),
                Integer.valueOf(empruntDtoDocuments.getAnneePublication()),
                empruntDtoDocuments.getGenreDocument());

        final EmpruntDtoDocument empruntDocuments = serviceEmpruntDocuments.saveEmpruntDocuments(
                new SimpleDateFormat("yyyy-mm-dd").parse(empruntDtoDocuments.getDateInitial()),
                new SimpleDateFormat("yyyy-mm-dd").parse(empruntDtoDocuments.getDateExpire()),
                empruntDtoDocuments.getNbrRappel(),
                clientDto.toClient(),
                documents.get(0).toDocument());
        empruntDtoDocuments.setId(empruntDocuments.getId());

        return empruntDocuments;
    }
}
