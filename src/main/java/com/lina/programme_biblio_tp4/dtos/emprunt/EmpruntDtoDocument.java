package com.lina.programme_biblio_tp4.dtos.emprunt;

import com.lina.programme_biblio_tp4.modele.Client;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.EmpruntDocuments;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmpruntDtoDocument {
    private static ServiceClient serviceClient;
    private static ServiceDocument serviceDocument;
    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private long id;
    private String dateInitial;
    private String dateExpire;
    private int nbrRappel;
    private String nom;
    private String prenom;
    private String titre;
    private String auteur;
    private int anneePublication;
    private String genreDocument;

    public EmpruntDocuments toEmpruntDocuments() {
        LocalDate bDateInitial;
        LocalDate bDateExpire;
        Client client;
        Document document;
        try {
            bDateInitial = dateInitial == null ? null : LocalDate.parse(dateInitial, DATETIMEFORMATTER);
            bDateExpire = dateExpire == null ? null : LocalDate.parse(dateExpire, DATETIMEFORMATTER);
            client = serviceClient.findByName(nom).toClient();
            document = serviceDocument.searchDocument(titre, auteur, anneePublication, genreDocument).get(0).toDocument();
        } catch (Exception e) {
            bDateInitial = null;
            bDateExpire = null;
            client = null;
            document = null;
        }
        final EmpruntDocuments empruntDocuments = new EmpruntDocuments(
                Date.from(bDateInitial.atStartOfDay(ZoneId.systemDefault()).toInstant()),
                Date.from(bDateExpire.atStartOfDay(ZoneId.systemDefault()).toInstant()),
                nbrRappel,
                client,
                document
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                empruntDocuments.setId(oldId);
        } catch (NumberFormatException ignored) {}
        return empruntDocuments;
    }
}
