package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.DVD;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DvdRepository extends JpaRepository<DVD, Long> {
}
