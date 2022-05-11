package com.lina.programme_biblio_tp4.dtos.document;

import com.lina.programme_biblio_tp4.modele.DVD;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.EtatDocument;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DvdDto extends DocumentDto {
    protected static EtatDocument ETATDOCUMENT;
    protected double duree;
    protected String genreFilm;

    public DvdDto(
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
    public DVD toDocument() {
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
