package com.lina.programme_biblio_tp4.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocumentForm {
    private String id;
    private String genreDocument;
    private String etatDocument;
    private String titre;
    private String auteur;
    private String editeur;
    private int anneePublication;
    private int nbrExemplaire;
}
