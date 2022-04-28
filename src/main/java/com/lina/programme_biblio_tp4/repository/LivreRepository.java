package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.Livre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivreRepository extends JpaRepository<Livre, Long> {
}
