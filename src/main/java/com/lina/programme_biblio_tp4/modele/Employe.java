package com.lina.programme_biblio_tp4.modele;

import com.lina.programme_biblio_tp4.forms.utilisateurs.EmployeForm;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nom;
    private String prenom;
    private Fonction fonction;

    public Employe(String nom, String prenom, Fonction fonction) {
        this.nom = nom;
        this.prenom = prenom;
        this.fonction = fonction;
    }

    @Override
    public String toString() {
        return "Employe{" +
                "nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", fonction=" + fonction +
                '}';
    }

    public EmployeForm toEmployeForm() {
        return new EmployeForm(
                id,
                nom,
                prenom,
                fonction.toString()
        );
    }
}