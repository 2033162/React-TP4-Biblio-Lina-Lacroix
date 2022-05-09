package com.lina.programme_biblio_tp4.repository;

import com.lina.programme_biblio_tp4.modele.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query(value = "SELECT * FROM Client c WHERE LOWER(c.nom) = LOWER(:nom)", nativeQuery = true)
    Client findByName(@Param("nom") String nom);
}
