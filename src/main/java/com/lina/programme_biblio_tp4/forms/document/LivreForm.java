package com.lina.programme_biblio_tp4.forms.document;

import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.EtatDocument;
import com.lina.programme_biblio_tp4.modele.GenreLivre;
import com.lina.programme_biblio_tp4.modele.Livre;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LivreForm extends DocumentForm {
    protected static EtatDocument ETATDOCUMENT;
    protected static GenreLivre GENRELIVRE;
    protected int nbrPages;
    protected String genreLivre;

    public LivreForm(long id,
                     String etatDocument,
                     String genreDocument,
                     String titre,
                     String auteur,
                     String editeur,
                     int anneePublication,
                     int nbrExemplaire,
                     int nbrPages,
                     String genreLivre) {
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
        this.nbrPages = nbrPages;
        this.genreLivre = genreLivre;
    }

    @Override
    public Document toDocument() {
        EtatDocument bEtatDocument;
        GenreLivre bGenreLivre;
        try {
            bEtatDocument = etatDocument == null ? null : EtatDocument.valueOf(etatDocument);
            bGenreLivre = genreLivre == null ? null : GenreLivre.valueOf(genreLivre);
        } catch (Exception e) {
            bEtatDocument = null;
            bGenreLivre = null;
        }
        final Livre livre = new Livre(
                bEtatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire,
                nbrPages,
                bGenreLivre
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                livre.setId(oldId);
        } catch (NumberFormatException ignored) {}

        return livre;
    }
}