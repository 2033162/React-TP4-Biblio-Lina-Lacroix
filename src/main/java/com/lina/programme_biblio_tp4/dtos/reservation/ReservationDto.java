package com.lina.programme_biblio_tp4.dtos.reservation;

import com.lina.programme_biblio_tp4.modele.Client;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.Reservation;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDto {
    private static ServiceClient serviceClient;
    private static ServiceDocument serviceDocument;
    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private long id;
    private String dateReservation;
    private String nom;
    private String prenom;
    private String titre;
    private String auteur;
    private int anneePublication;
    private String genreDocument;

    public Reservation toReservation() {
        LocalDate bDateReservation;
        Client client;
        Document document;
        try {
            bDateReservation = dateReservation == null ? null : LocalDate.parse(dateReservation, DATETIMEFORMATTER);
            client = serviceClient.findByName(nom).toClient();
            document = serviceDocument.searchDocument(titre, auteur, anneePublication, genreDocument).get(0).toDocument();
        } catch (Exception e) {
            bDateReservation = null;
            client = null;
            document = null;
        }
        final Reservation reservation = new Reservation(
                bDateReservation,
                client,
                document
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                reservation.setId(oldId);
        } catch (NumberFormatException ignored) {}
        return reservation;
    }
}