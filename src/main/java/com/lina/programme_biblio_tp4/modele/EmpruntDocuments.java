package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.dtos.emprunt.EmpruntDtoDocument;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class EmpruntDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private LocalDate dateInitial;
    private LocalDate dateExpire;
    private int nbrRappel;

    @ManyToOne
    @JoinColumn(name = "client")
    @ToString.Exclude
    private Client client;

    @ManyToOne
    @JoinColumn(name = "document")
    @ToString.Exclude
    private Document document;

    public EmpruntDocuments(LocalDate dateInitial, LocalDate dateExpire, int nbrRappel, Client client, Document document) {
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

    public EmpruntDtoDocument toEmpruntDtoDocument() {
        return new EmpruntDtoDocument(
                id,
                dateInitial.toString(),
                dateExpire.toString(),
                nbrRappel,
                client.toClientDto(),
                document.toDocumentForm()
        );
    }
}