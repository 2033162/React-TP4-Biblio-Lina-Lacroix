package com.lina.programme_biblio_tp4.controllers.emprunt;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.emprunt.EmpruntDtoDocument;
import com.lina.programme_biblio_tp4.dtos.emprunt.EmpruntFormDocument;
import com.lina.programme_biblio_tp4.dtos.utilisateurs.ClientDto;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import com.lina.programme_biblio_tp4.service.ServiceEmpruntDocuments;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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

    @PostMapping
    public EmpruntDtoDocument addEmprunt(@RequestBody EmpruntFormDocument empruntFormDocuments) throws ParseException {
        ClientDto clientDto = serviceClient.findByName(empruntFormDocuments.getNom());
        if (clientDto == null) {
            throw new IllegalArgumentException("Client non trouvé");
        }
        List<DocumentDto> documents = serviceDocument.searchDocument(empruntFormDocuments.getTitre(),
                empruntFormDocuments.getAuteur(),
                empruntFormDocuments.getAnneePublication(),
                empruntFormDocuments.getGenreDocument());
        if (documents.size() != 1) {
            throw new IllegalArgumentException("Document non trouvé ou résultat non unique");
        }

        final EmpruntDtoDocument empruntDocuments = serviceEmpruntDocuments.saveEmpruntDocuments(
                new SimpleDateFormat("yyyy-MM-dd").parse(empruntFormDocuments.getDateInitial()),
                new SimpleDateFormat("yyyy-MM-dd").parse(empruntFormDocuments.getDateExpire()),
                empruntFormDocuments.getNbrRappel(),
                clientDto.toClient(),
                documents.get(0).toDocument());
        empruntFormDocuments.setId(empruntDocuments.getId());

        return empruntDocuments;
    }

    @DeleteMapping("/{id}")
    public void retourEmprunt(@PathVariable long id) {
        Calendar today = Calendar.getInstance();
        today.set(Calendar.HOUR_OF_DAY, 0);
        today.set(Calendar.MINUTE, 0);
        today.set(Calendar.SECOND, 0);

        EmpruntDtoDocument empruntDtoDocument = serviceEmpruntDocuments.getEmpruntDocuments(id);

        serviceEmpruntDocuments.retourDocument(empruntDtoDocument.toEmpruntDocuments().getClient(),
                empruntDtoDocument.toEmpruntDocuments().getDocument(), today.getTime());
    }
}
