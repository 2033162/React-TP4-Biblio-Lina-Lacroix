package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}