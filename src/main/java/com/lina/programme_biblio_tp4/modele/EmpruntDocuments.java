package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.dtos.emprunt.EmpruntDtoDocument;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class EmpruntDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private Date dateInitial;
    private Date dateExpire;
    private int nbrRappel;

    @ManyToOne
    @JoinColumn(name = "client")
    @ToString.Exclude
    private Client client;

    @ManyToOne
    @JoinColumn(name = "document")
    @ToString.Exclude
    private Document document;

    public EmpruntDocuments(Date dateInitial, Date dateExpire, int nbrRappel, Client client, Document document) {
        this.dateInitial = dateInitial;
        this.dateExpire = dateExpire;
        this.nbrRappel = nbrRappel;
        this.client = client;
        this.document = document;
    }

    @Override
    public String toString() {
        return "EmpruntDocuments{" +
                "id=" + id +
                ", dateInitial=" + dateInitial +
                ", dateExpire=" + dateExpire +
                ", nbrRappel=" + nbrRappel +
                ", client=" + client +
                ", document=" + document.toStringDocument() +
                '}';
    }

    public EmpruntDtoDocument toEmpruntFormDocument() {
        return new EmpruntDtoDocument(
                id,
                dateInitial.toString(),
                dateExpire.toString(),
                nbrRappel,
                client.getNom(),
                client.getPrenom(),
                document.getTitre(),
                document.getAuteur(),
                document.getAnneePublication(),
                document.getGenreDocument()
        );
    }
}