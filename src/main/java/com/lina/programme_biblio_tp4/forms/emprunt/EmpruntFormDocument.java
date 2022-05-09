package com.lina.programme_biblio_tp4.forms.emprunt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmpruntFormDocument {
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

    /*private ServiceDocument serviceDocument;
    private ServiceClient serviceClient;*/

    /*public EmpruntDocuments toEmpruntDocument() {
        LocalDate bDateInitial;
        LocalDate bDateExpire;
        try {
            bDateInitial = dateInitial == null ? null : LocalDate.parse(dateInitial, DATETIMEFORMATTER);
            bDateExpire = dateExpire == null ? null : LocalDate.parse(dateExpire, DATETIMEFORMATTER);
        } catch (Exception e) {
            bDateInitial = null;
            bDateExpire = null;
        }
        assert bDateInitial != null;
        Date dateI = Date.from(bDateInitial.atStartOfDay(ZoneId.systemDefault()).toInstant());
        assert bDateExpire != null;
        Date dateE = Date.from(bDateExpire.atStartOfDay(ZoneId.systemDefault()).toInstant());

        final EmpruntDocuments empruntDocuments = new EmpruntDocuments(
                dateI,
                dateE,
                nbrRappel,
                serviceClient.findByName(nom),
                serviceDocument.searchDocument(titre, auteur,
                        Integer.valueOf(anneePublication), genreDocument)
        );

        return empruntDocuments;
    }*/

}
