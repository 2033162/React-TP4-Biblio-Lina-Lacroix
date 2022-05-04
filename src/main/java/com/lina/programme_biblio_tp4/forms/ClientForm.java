package com.lina.programme_biblio_tp4.forms;

import com.lina.programme_biblio_tp4.modele.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientForm {
    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private String id;
    private String nom;
    private String prenom;
    private String rue;
    private String ville;
    private String codePostal;
    private String numeroTelephone;
    private String dateInscription;

    public ClientForm(Client client) {
        this(Long.toString(client.getId()),
                client.getNom(),
                client.getPrenom(),
                client.getRue(),
                client.getVille(),
                client.getCodePostal(),
                client.getNumeroTelephone(),
                client.getDateInscription() == null ? null : DATETIMEFORMATTER.format(client.getDateInscription()));
    }

    public Client toClient() {
        LocalDate bDate;
        try {
            bDate = dateInscription == null ? null : LocalDate.parse(dateInscription, DATETIMEFORMATTER);
        } catch (Exception e) {
            bDate = null;
        }
        final Client client = new Client(nom,
                prenom,
                rue,
                ville,
                codePostal,
                numeroTelephone,
                bDate);
        long oldId;
        try {
            oldId = Long.parseLong(id);
            if (oldId > 0)
                client.setId(oldId);
        } catch (NumberFormatException ignored) {}
        return client;
    }
}