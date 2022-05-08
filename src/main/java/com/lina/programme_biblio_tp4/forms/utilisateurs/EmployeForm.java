package com.lina.programme_biblio_tp4.forms.utilisateurs;

import com.lina.programme_biblio_tp4.modele.Employe;
import com.lina.programme_biblio_tp4.modele.Fonction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeForm {
    private static Fonction FONCTION;
    private long id;
    private String nom;
    private String prenom;
    private String fonction;

    public Employe toEmploye() {
        Fonction bFonction;
        try {
            bFonction = fonction == null ? null : Fonction.valueOf(fonction);
        } catch (Exception e) {
            bFonction = null;
        }
        final Employe employe = new Employe(
                nom,
                prenom,
                bFonction
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                employe.setId(oldId);
        } catch (NumberFormatException ignored) {}
        return employe;
    }
}
