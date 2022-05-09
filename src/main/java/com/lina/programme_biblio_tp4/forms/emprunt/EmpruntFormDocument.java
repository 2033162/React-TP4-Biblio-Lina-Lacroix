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
}
