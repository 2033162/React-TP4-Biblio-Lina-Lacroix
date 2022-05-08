package com.lina.programme_biblio_tp4.forms.document;

import com.lina.programme_biblio_tp4.modele.DVD;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.EtatDocument;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DvdForm extends DocumentForm {
    private static EtatDocument ETATDOCUMENT;
    private double duree;
    private String genreFilm;

    public DvdForm(
            long id,
            String etatDocument,
            String genreDocument,
            String titre,
            String auteur,
            String editeur,
            int anneePublication,
            int nbrExemplaire,
            double duree,
            String genreFilm
    ) {
        super(
                id,
                etatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire
        );
        this.duree = duree;
        this.genreFilm = genreFilm;
    }

    @Override
    public Document toDocument() {
        EtatDocument bEtatDocument;
        try {
            bEtatDocument = etatDocument == null ? null : EtatDocument.valueOf(etatDocument);
        } catch (Exception e) {
            bEtatDocument = null;
        }

        final DVD dvd = new DVD(
                bEtatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire,
                duree,
                genreFilm
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                dvd.setId(oldId);
        } catch (NumberFormatException ignored) {}

        return dvd;
    }
}
