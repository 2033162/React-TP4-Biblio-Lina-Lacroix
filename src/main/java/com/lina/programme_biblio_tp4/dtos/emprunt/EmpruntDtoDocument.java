package com.lina.programme_biblio_tp4.dtos.emprunt;

import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.utilisateurs.ClientDto;
import com.lina.programme_biblio_tp4.modele.EmpruntDocuments;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmpruntDtoDocument {

    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    private long id;
    private String dateInitial;
    private String dateExpire;
    private int nbrRappel;
    private ClientDto clientDto;
    private DocumentDto documentDto;

    public EmpruntDocuments toEmpruntDocuments() {
        LocalDate bDateInitial;
        LocalDate bDateExpire;
        try {
            bDateInitial = dateInitial == null ? null : LocalDate.parse(dateInitial, DATETIMEFORMATTER);
            bDateExpire = dateExpire == null ? null : LocalDate.parse(dateExpire, DATETIMEFORMATTER);
        } catch (Exception e) {
            bDateInitial = null;
            bDateExpire = null;
        }
        final EmpruntDocuments empruntDocuments = new EmpruntDocuments(
                bDateInitial,
                bDateExpire,
                nbrRappel,
                clientDto.toClient(),
                documentDto.toDocument()
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                empruntDocuments.setId(oldId);
        } catch (NumberFormatException ignored) {}
        return empruntDocuments;
    }
}
