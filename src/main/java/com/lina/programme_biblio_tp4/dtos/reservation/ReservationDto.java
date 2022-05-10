package com.lina.programme_biblio_tp4.dtos.reservation;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.utilisateurs.ClientDto;
import com.lina.programme_biblio_tp4.modele.Reservation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDto {

    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    private long id;
    private String dateReservation;
    private ClientDto clientDto;
    private DocumentDto documentDto;

    public Reservation toReservation() {
        LocalDate bDateReservation;
        try {
            bDateReservation = dateReservation == null ? null : LocalDate.parse(dateReservation, DATETIMEFORMATTER);
        } catch (Exception e) {
            bDateReservation = null;
        }
        final Reservation reservation = new Reservation(
                bDateReservation,
                clientDto.toClient(),
                documentDto.toDocument()
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