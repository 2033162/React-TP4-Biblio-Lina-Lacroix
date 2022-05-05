package com.lina.programme_biblio_tp4.forms.document;

import com.lina.programme_biblio_tp4.modele.CD;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.EtatDocument;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CdForm extends DocumentForm {
    private static EtatDocument ETATDOCUMENT;
    private String genreMusique;
    private String compositeur;
    private String interprete;

    public CdForm(
            long id,
            String etatDocument,
            String genreDocument,
            String titre,
            String auteur,
            String editeur,
            int anneePublication,
            int nbrExemplaire,
            String genreMusique,
            String compositeur,
            String interprete
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
        this.genreMusique = genreMusique;
        this.compositeur = compositeur;
        this.interprete = interprete;
    }

    @Override
    public Document toDocument() {
        EtatDocument bEtatDocument;
        try {
            bEtatDocument = etatDocument == null ? null : EtatDocument.valueOf(etatDocument);
        } catch (Exception e) {
            bEtatDocument = null;
        }
        final CD cd = new CD(
                bEtatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire,
                genreMusique,
                compositeur,
                interprete
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                cd.setId(oldId);
        } catch (NumberFormatException ignored) {}

        return cd;
    }
}
