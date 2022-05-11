package com.lina.programme_biblio_tp4;

import com.lina.programme_biblio_tp4.dtos.document.*;
import com.lina.programme_biblio_tp4.dtos.emprunt.*;
import com.lina.programme_biblio_tp4.dtos.reservation.ReservationDto;
import com.lina.programme_biblio_tp4.dtos.utilisateurs.*;
import com.lina.programme_biblio_tp4.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigInteger;
import java.text.DateFormatSymbols;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class MainBiblio implements CommandLineRunner {

    @Autowired
    private ServiceClient serviceClient;
    @Autowired
    private ServiceDocument serviceDocument;
    @Autowired
    private ServiceEmploye serviceEmploye;
    @Autowired
    private ServiceEmpruntDocuments serviceEmpruntDocuments;
    @Autowired
    private ServiceReservation serviceReservation;

    public static void main(String[] args) {
        SpringApplication.run(MainBiblio.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        final CdDto cd = serviceDocument.saveCD(
                "DISPONIBLE",
                "CD",
                "harry potter",
                "JK. Rolling",
                "maison edition",
                2000,
                "classique",
                "JK. Rolling",
                "michel");
        final DvdDto dvd = serviceDocument.saveDVD(
                "ENDOMMAGE",
                "DVD",
                "bobby bob",
                "lilo lee",
                "edition bop",
                2018,
                44,
                "drame");
        final LivreDto livre = serviceDocument.saveLivre(
                "EMPRUNTE",
                "livre",
                "avengers",
                "Josh whedon",
                "marvel",
                2020,
                230,
                "ROMAN");
        final EmployeDto employe = serviceEmploye.saveEmploye(
                "bernadette",
                "carmier",
                "GESTIONNAIRE");
        final ClientDto client = serviceClient.saveClient(
                "Smith",
                "John",
                "Daragon",
                "Montreal",
                "H05C42",
                "514-900-5698",
                getDateFromLocalDate(2022, 2, 20));
        final ClientDto client2 = serviceClient.saveClient(
                "Stewart",
                "Marvin",
                "LaSale",
                "Montreal",
                "H05C42",
                "514-900-5698",
                getDateFromLocalDate(2022, 2, 22));
        final ReservationDto reservation = serviceReservation.saveReservation(
                getDateFromLocalDate(2000,10,5),
                client.toClient(),
                livre.toDocument());
        final EmpruntDtoDocument empruntDocuments = serviceEmpruntDocuments.saveEmpruntDocuments(
                new SimpleDateFormat("yyyy-MM-dd").parse("2022-04-15"),
                new SimpleDateFormat("yyyy-MM-dd").parse("2022-04-19"),
                0,
                client.toClient(),
                livre.toDocument());


        System.out.println("\nCRUD - CD");
        System.out.println(serviceDocument.getCD(cd.getId()));

        cd.setGenreMusique("jazz");
        serviceDocument.saveCD(cd);
        System.out.println(serviceDocument.getCD(cd.getId()));


        System.out.println("\nCRUD - DVD");
        System.out.println(serviceDocument.getDVD(dvd.getId()));

        dvd.setEtatDocument("DISPONIBLE");
        serviceDocument.saveDVD(dvd);
        System.out.println(serviceDocument.getDVD(dvd.getId()));


        System.out.println("\nCRUD - Livre");
        System.out.println(serviceDocument.getLivre(livre.getId()));

        livre.setNbrPages(900);
        serviceDocument.saveLivre(livre);
        System.out.println(serviceDocument.getLivre(livre.getId()));


        System.out.println("\nCRUD - Employe");
        System.out.println(serviceEmploye.getEmploye(employe.getId()));

        employe.setFonction("PREPOSE");
        serviceEmploye.saveEmploye(employe.toEmploye());
        System.out.println(serviceEmploye.getEmploye(employe.getId()));


        System.out.println("\nCRUD - Client");
        System.out.println(serviceClient.getClient(Integer.parseInt(client.getId())));

        client.setRue("Drolet");
        serviceClient.saveClient(client.toClient());
        System.out.println(serviceClient.getClient(Integer.parseInt(client.getId())));


        System.out.println("\nCRUD - Reservation");
        System.out.println(serviceReservation.getReservation(reservation.getId()));

        reservation.setDateReservation("2022-03-13");
        serviceReservation.saveReservation(reservation.toReservation());
        System.out.println(serviceReservation.getReservation(reservation.getId()));


        System.out.println("\nCRUD - EmpruntDocuments");
        System.out.println(serviceEmpruntDocuments.getEmpruntDocuments(empruntDocuments.getId()));

        empruntDocuments.setNbrRappel(0);
        serviceEmpruntDocuments.saveEmpruntDocuments(empruntDocuments.toEmpruntDocuments());
        System.out.println(serviceEmpruntDocuments.getEmpruntDocuments(empruntDocuments.getId()));


        System.out.println("\nRESULTAT RECHERCHE DOCUMENTS :");
        List<DocumentDto> listeDocuments = serviceDocument.searchDocument("avengers",
                "Josh whedon",
                2020,
                "livre");
        listeDocuments.forEach(System.out::println);
        System.out.println();


        System.out.println("\nFaire un emprunt");
        System.out.println(serviceEmpruntDocuments.faireEmprunt(client2.toClient(), livre.toDocument()));


        System.out.println("\nListe des emprunts du client:");
        var clientEmprunt = serviceEmpruntDocuments.getClientEmprunt(Integer.parseInt(client.getId()));
        for (EmpruntDtoDocument empruntDocument: clientEmprunt) {
            System.out.println(empruntDocument);
        }
        System.out.println();


        System.out.println("\nNOMBRE D'EMPRUNT PAR MOIS :");
        BigInteger[] nbrEmpruntParMois = serviceEmpruntDocuments.getNbrEmpruntParMois();
        for (int i = 0; i < nbrEmpruntParMois.length; i++) {
            System.out.println(new DateFormatSymbols().getMonths()[i] + "  " + nbrEmpruntParMois[i]);
        }
        System.out.println();


        System.out.println("\nRETOUR DOCUMENT EMPRUNTE");
        System.out.println(serviceEmpruntDocuments.retourDocument(client.toClient(), livre.toDocument(),
                new SimpleDateFormat("yyyy-MM-dd").parse("2022-04-22")));
        System.out.println();


        System.out.println("\nLISTE DES FRAIS");
        System.out.println(serviceClient.listeFrais(client.toClient()));
    }

    private LocalDate getDateFromLocalDate(int year, int month, int day) {
        return LocalDate.of(year, month, day);
    }
}