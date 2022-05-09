package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.dtos.reservation.ReservationDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private LocalDate dateReservation;

    @ManyToOne
    @JoinColumn(name = "client")
    @ToString.Exclude
    private Client client;

    @ManyToOne
    @JoinColumn(name = "document")
    @ToString.Exclude
    private Document document;

    public Reservation(LocalDate dateReservation, Client client, Document document) {
        this.dateReservation = dateReservation;
        this.client = client;
        this.document = document;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", dateReservation=" + dateReservation +
                ", client=" + client +
                ", document=" + document.toStringDocument() +
                '}';
    }

    public ReservationDto toReservationDto() {
        return new ReservationDto(
                id,
                dateReservation.toString(),
                client.getNom(),
                client.getPrenom(),
                document.getTitre(),
                document.getAuteur(),
                document.getAnneePublication(),
                document.getGenreDocument()
        );
    }
}