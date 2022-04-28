package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.CD;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CdRepository extends JpaRepository<CD, Long> {
}