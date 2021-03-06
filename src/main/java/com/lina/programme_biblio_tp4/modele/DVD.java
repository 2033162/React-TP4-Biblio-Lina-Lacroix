package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.document.DvdDto;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@DiscriminatorValue("DVD")
@Data
@NoArgsConstructor
public class DVD extends Document {
    private double duree;
    private String genreFilm;

    public DVD(EtatDocument etatDocument, String genreDocument, String titre, String auteur, String editeur, int anneePublication, int nbrExemplaire, double duree, String genreFilm) {
        this.setEtatDocument(etatDocument);
        this.setGenreDocument(genreDocument);
        this.setTitre(titre);
        this.setAuteur(auteur);
        this.setEditeur(editeur);
        this.setAnneePublication(anneePublication);
        this.setNbrExemplaire(nbrExemplaire);
        this.duree = duree;
        this.genreFilm = genreFilm;
    }

    @Override
    public String toString() {
        return "DVD{" +
                getDocument().toStringDocument() + '\n' +
                "duree=" + duree +
                ", genreFilm='" + genreFilm + '\'' +
                '}';
    }

    @Override
    public DocumentDto toDocumentForm() {
        return new DvdDto(
                id,
                etatDocument.toString(),
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire,
                duree,
                genreFilm
        );
    }
}