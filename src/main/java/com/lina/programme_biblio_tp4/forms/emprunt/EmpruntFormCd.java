package com.lina.programme_biblio_tp4.forms.emprunt;

import com.lina.programme_biblio_tp4.forms.document.CdForm;
import com.lina.programme_biblio_tp4.forms.utilisateurs.ClientForm;
import com.lina.programme_biblio_tp4.modele.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Data
@NoArgsConstructor
public class EmpruntFormCd extends CdForm {
    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private ClientForm clientForm;
    private long id;
    private String dateInitial;
    private String dateExpire;
    private int nbrRappel;

    public EmpruntFormCd(long id,
                            String dateInitial,
                            String dateExpire,
                            int nbrRappel,
                            String nom,
                            String prenom,
                            String rue,
                            String ville,
                            String codePostal,
                            String numeroTelephone,
                            String dateInscription,
                            String etatDocument,
                            String genreDocument,
                            String titre,
                            String auteur,
                            String editeur,
                            int anneePublication,
                            int nbrExemplaire,
                            String genreMusique,
                            String compositeur,
                            String interprete) {
        super(
                id,
                etatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                nbrExemplaire,
                genreMusique,
                compositeur,
                interprete);
        clientForm = new ClientForm(
                id,
                nom,
                prenom,
                rue,
                ville,
                codePostal,
                numeroTelephone,
                dateInscription
        );

        this.id = id;//??

        this.dateInitial = dateInitial;
        this.dateExpire = dateExpire;
        this.nbrRappel = nbrRappel;
    }

    public EmpruntDocuments toEmpruntDocumentsCd() {
        LocalDate bDateInitial;
        LocalDate bDateExpire;
        EtatDocument bEtatDocument;
        try {
            bDateInitial = dateInitial == null ? null : LocalDate.parse(dateInitial, DATETIMEFORMATTER);
            bDateExpire = dateExpire == null ? null : LocalDate.parse(dateExpire, DATETIMEFORMATTER);
            bEtatDocument = etatDocument == null ? null : EtatDocument.valueOf(etatDocument);
        } catch (Exception e) {
            bDateInitial = null;
            bDateExpire = null;
            bEtatDocument = null;
        }

        assert bDateInitial != null;
        Date dateI = Date.from(bDateInitial.atStartOfDay(ZoneId.systemDefault()).toInstant());
        assert bDateExpire != null;
        Date dateE = Date.from(bDateExpire.atStartOfDay(ZoneId.systemDefault()).toInstant());

        final EmpruntDocuments empruntDocuments = new EmpruntDocuments(
                dateI,
                dateE,
                nbrRappel,
                clientForm.toClient(),
                new CD(
                        bEtatDocument,
                        genreDocument,
                        titre,
                        auteur,
                        editeur,
                        anneePublication,
                        nbrExemplaire,
                        genreMusique,
                        compositeur,
                        interprete
                )
        );
        long oldId;
        try {
            oldId = id;
            if (oldId > 0)
                empruntDocuments.setId(id);
        } catch (NumberFormatException ignored) {}
        return empruntDocuments;
    }
}
