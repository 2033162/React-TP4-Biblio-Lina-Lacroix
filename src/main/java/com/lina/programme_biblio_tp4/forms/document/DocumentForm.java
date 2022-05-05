package com.lina.programme_biblio_tp4.forms.document;

import com.lina.programme_biblio_tp4.modele.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class DocumentForm {
    protected long id;
    protected String genreDocument;
    protected String etatDocument;
    protected String titre;
    protected String auteur;
    protected String editeur;
    protected int anneePublication;
    protected int nbrExemplaire;

    public abstract Document toDocument();
}
