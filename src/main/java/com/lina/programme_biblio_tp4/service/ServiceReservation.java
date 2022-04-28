package com.lina.programme_biblio_tp4.service;

import com.lina.programme_biblio_tp4.modele.Client;
import com.lina.programme_biblio_tp4.modele.Document;
import com.lina.programme_biblio_tp4.modele.Reservation;
import com.lina.programme_biblio_tp4.repository.ReservationRepository;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Optional;

@Component
public class ServiceReservation {

    private ReservationRepository reservationRepository;

    public ServiceReservation(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public Reservation saveReservation(Date dateReservation, Client client, Document document) {
        return reservationRepository.save(new Reservation(dateReservation, client, document));
    }

    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void removeReservation(Reservation reservation) {
        reservationRepository.delete(reservation);
    }

    public Optional<Reservation> getReservation(long reservationID) {
        return reservationRepository.findById(reservationID);
    }
}