package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "DOCUMENT")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "DOCUMENT_TYPE",discriminatorType = DiscriminatorType.STRING)
@Data
@NoArgsConstructor
public abstract class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
    public static final String C_LIVRE = "livre";
    public static final String C_CD = "CD";
    public static final String C_DVD = "DVD";

    protected String genreDocument;
    protected EtatDocument etatDocument;
    protected String titre;
    protected String auteur;
    protected String editeur;
    protected int anneePublication;
    protected int nbrExemplaire;

    @OneToMany(mappedBy = "document")
    List<Reservation> reservations = new ArrayList<>();

    @OneToMany(mappedBy = "document")
    List<EmpruntDocuments> empruntDocuments = new ArrayList<>();

    @OneToMany(mappedBy = "document")
    List<Amende> amendes = new ArrayList<>();

    public Document(EtatDocument etatDocument, String genreDocument, String titre, String auteur, String editeur, int anneePublication, int nbrExemplaire) {
        this.genreDocument = genreDocument;
        this.etatDocument = etatDocument;
        this.titre = titre;
        this.auteur = auteur;
        this.editeur = editeur;
        this.anneePublication = anneePublication;
        this.nbrExemplaire = nbrExemplaire;
    }

    public Document getDocument() {
        return this;
    }

    public String toStringDocument() {
        return "Documents{" +
                "genreDocument=" + genreDocument +
                ", etatDocument='" + etatDocument + '\'' +
                ", titre='" + titre + '\'' +
                ", auteur='" + auteur + '\'' +
                ", editeur='" + editeur + '\'' +
                ", anneePublication=" + anneePublication + '\'' +
                ", nbrExemplaire=" + nbrExemplaire +
                '}';
    }

    public abstract DocumentForm toDocumentForm();
}