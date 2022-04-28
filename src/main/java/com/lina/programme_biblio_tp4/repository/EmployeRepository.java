package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeRepository extends JpaRepository<Employe, Long> {
}
