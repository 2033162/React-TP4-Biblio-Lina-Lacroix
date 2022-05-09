package com.lina.programme_biblio_tp4.controllers.emprunt;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.forms.emprunt.EmpruntFormDocument;
import com.lina.programme_biblio_tp4.forms.utilisateurs.ClientForm;
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
    public List<EmpruntFormDocument> getAllEmpruntDocuments() {
        return serviceEmpruntDocuments.findAllEmpruntDocuments();
    }

    @GetMapping("/{id}")
    public EmpruntFormDocument getEmpruntDocument(@PathVariable long id) {
        return serviceEmpruntDocuments.getEmpruntDocuments(id);
    }

    @PostMapping
    public EmpruntFormDocument addEmprunt(@RequestBody EmpruntFormDocument empruntFormDocuments) throws ParseException {
        ClientForm clientForm = serviceClient.findByName(empruntFormDocuments.getNom());
        List<DocumentForm> documents = serviceDocument.searchDocument(empruntFormDocuments.getTitre(),
                empruntFormDocuments.getAuteur(),
                Integer.valueOf(empruntFormDocuments.getAnneePublication()),
                empruntFormDocuments.getGenreDocument());

        final EmpruntFormDocument empruntDocuments = serviceEmpruntDocuments.saveEmpruntDocuments(
                new SimpleDateFormat("yyyy-mm-dd").parse(empruntFormDocuments.getDateInitial()),
                new SimpleDateFormat("yyyy-mm-dd").parse(empruntFormDocuments.getDateExpire()),
                empruntFormDocuments.getNbrRappel(),
                clientForm.toClient(),
                documents.get(0).toDocument()).toEmpruntFormDocument();
        empruntFormDocuments.setId(empruntDocuments.getId());

        return empruntDocuments;
    }
}
