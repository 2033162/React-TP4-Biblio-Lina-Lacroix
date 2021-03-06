package com.lina.programme_biblio_tp4.dtos.document;

import com.lina.programme_biblio_tp4.modele.CD;
import com.lina.programme_biblio_tp4.modele.EtatDocument;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CdDto extends DocumentDto {
    protected static EtatDocument ETATDOCUMENT;
    protected String genreMusique;
    protected String compositeur;
    protected String interprete;

    public CdDto(
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
        this.id = id;
        this.etatDocument = etatDocument;
        this.genreDocument = genreDocument;
        this.titre = titre;
        this.auteur = auteur;
        this.editeur = editeur;
        this.anneePublication = anneePublication;
        this.nbrExemplaire = nbrExemplaire;
        this.genreMusique = genreMusique;
        this.compositeur = compositeur;
        this.interprete = interprete;
    }

    @Override
    public CD toDocument() {
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
